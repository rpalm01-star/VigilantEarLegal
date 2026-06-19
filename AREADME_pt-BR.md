# Vigilant Ear 👂🛡️ (Edição Android)

**Data de Vigência:** 6 de junho de 2026

**Vigilant Ear** é uma ferramenta avançada de acessibilidade e pesquisa acústica de ultra-alto desempenho para Android, projetada para fornecer percepção espacial e direcional em tempo real para a comunidade surda e com deficiência auditiva (D/HH). O software de reconhecimento de som tradicional apenas identifica *o que* é um som. **O Vigilant Ear informa onde ele está, quem o está produzindo e o que eles estão dizendo.** Ele atua como um radar tático abrangente, combinando aprendizado de máquina computado na borda com física acústica sofisticada para rastrear exatamente *onde* um som se origina, sua distância estimada, sua trajetória absoluta de caminho e as palavras separadas e traduzidas de falantes individuais.

---

## 🌍 Alcance Global e Localização

Para dar suporte a usuários em todo o mundo, a plataforma apresenta uma matriz de localização nativa completa com suporte a:

- **Inglês**
- **Espanhol (Español)**
- **Português (Português)**
- **Chinês (简体中文)**
- **Francês (Français)**
- **Alemão (Deutsch)**
- **Japonês (日本語)**
- **Árabe (العربية)**

Todas as sobreposições táticas, alertas de HUD e menus de preferência se ajustam dinamicamente às localidades do sistema.

---

## 🚀 Principais Recursos e Capacidades

- **Controle Inteligente de Energia e WakeLocks**: Para maximizar a longevidade da bateria e proteger os recursos do sistema, o sistema implementa monitoramento condicional em segundo plano com WakeLocks robustos e Serviços de Primeiro Plano. Se as categorias de alerta de emergência estiverem desativadas, os loops de ingestão de microfone e os mecanismos de processamento entram em hibernação com eficiência.
- **Simulação de Alerta Tático**: Inclui um conjunto robusto de simulação no dispositivo que permite aos usuários testar assinaturas hápticas e respostas visuais para faixas `.emergency` críticas — Sirenes, Alarmes, Campainhas, Pessoas Próximas e Clima Severo (incluindo feeds do NWS, MeteoGate Europe e CMA/MEM da China) — sem exigir gatilhos acústicos do mundo real.
- **Rastreador Multialvo (MTT)**: Isola e rastreia simultaneamente assinaturas sonoras ambientais independentes usando marcadores de sessão únicos combinados com mapeamento de persistência física, utilizando limites avançados de refinamento para rastreamento contínuo.
- **Integração com Shazam**: Identificação em tempo real de música ambiente mapeada dinamicamente no radar espacial.
- **HUD de Radar Acústico**: Um painel tático totalmente ao vivo, fornecendo telemetria em tempo real sobre a energia do sistema, capacidade da rede, latência de processamento e FPS (Hz de análise), além de uma grade direcional rastreando alvos acústicos ambientais por rumo e energia.
- **Ajuste Geográfico em Ruas**: Projeta rumos acústicos matemáticos relativos em coordenadas GPS globais, ajustando de forma inteligente os vetores de veículos em tempo real para ruas verificadas.
- **Modo Alto-Falante (Legendas Direcionais ao Vivo)**: Transcreve as pessoas falando perto de você em linhas de legenda, uma por voz. A diarização de falantes no próprio dispositivo separa as vozes com cores distintas e linhas de rolagem, acompanhadas por setas direcionais apontando para a localização do falante.
- **Tradução ao Vivo no Dispositivo**: Transcreve e traduz discursos estrangeiros em tempo real. Todo o pipeline — audição, separação de locutores, transcrição e tradução — é executado inteiramente no dispositivo sem dependência da nuvem.

---

## 🧬 Arquitetura Central e o Mecanismo Matemático Neural

O Vigilant Ear no Android utiliza uma **Arquitetura SoundML Nativa** altamente otimizada, construída em torno do processamento C++ e do mecanismo de áudio em tempo real Oboe para garantir a menor latência possível em diversos hardwares.

```mermaid
graph TD
    A["Ingestão de Áudio Bruto (Oboe)"] --> B["Porta de Dizimação JNI Nativa"]
    B --> C["MediaPipe / YAMNet"]
    C -- "Classificação e Perfilamento" --> D["Thread de Processamento C++ Dedicada: FFT/TDOA"]
```

## ⚡ Desacoplamento Arquitetural

Para manter uma thread de UI (Interface de Usuário) completamente desbloqueada enquanto manipula continuamente uma entrada de alta frequência, a plataforma usa separação estrita entre Kotlin e C++:

- **UI em Kotlin / Serviço de Primeiro Plano**: Gerencia ciclos de vida de serviços em primeiro plano, permissões, estado de orientação do dispositivo e métricas de localização para guiar o HUD de forma suave.
- **AcousticEngine (C++ Nativo)**: Gerencia fluxos de áudio Oboe de baixo nível e operações de hardware. Os buffers de ingestão são profundamente copiados diretamente na thread de captura de alta prioridade, passando snapshots diretamente para uma fila de processamento nativa dedicada sem travar a UI.

### 🧠 Pipeline Acústico Avançado

- **Arquitetura de Classificador Duplo**: Utiliza um classificador primário delegado para NPU (Unidade de Processamento Neural) para o perfilamento crítico e de alta frequência do som, emparelhado com um ticker neural delegado para CPU para percepção contínua do som ambiente. As cargas de buffer de ML são ativamente monitoradas para acelerar ou desacelerar dinamicamente as corrotinas de inferência e evitar o acúmulo de ingestão.
- **Física Aguda vs. Banda Larga**: Diferencia a lógica de rastreamento com base na estrutura do som. Sons transitórios agudos (como palmas e quebra de vidro) são ativados nativamente por meio de algoritmos estritos de Pico (+16dB) e RMS (+3,5dB). Sons de banda larga (como música e veículos) usam limites de confiança mais baixos específicos (0,10f vs 0,25f) e são semeados de forma inteligente para garantir persistência no rastreamento contínuo.
- **Restrições e Refinamento**: O rastreador agrupa sons idênticos dentro de um delta espacial de 25 graus e os envelhece precisamente usando restrições de `tailMemory` do `AppGlobals`. As transmissões de rastreamento para a UI são cuidadosamente limitadas para evitar o esgotamento de recursos.
- **Matemática Espacial Paralela**: Pipelines matemáticos de alto desempenho (incluindo `kiss_fft`, cálculos de Diferença de Tempo de Chegada (TDOA) e algoritmos de rastreamento Doppler) são executados inteiramente em threads assíncronas nativas dedicadas.

### 📊 Benchmarks de Desempenho

- **Modo Ativo**: Projetado para fornecer de forma suave o rastreamento abrangente do HUD ao vivo.
- **Recuperação de Hardware**: A implementação robusta do Oboe garante recuperação automática, em menos de um segundo, das mudanças de rota de áudio (Bluetooth, fones de ouvido, troca de alto-falantes) sem derrubar as sessões de rastreamento.

---

## 🛠️ Stack Tecnológico (2026)

- **Linguagem**: Kotlin (Coroutines, Channels), C++ (JNI, Áudio Nativo)
- **Frameworks**: Android SDK, Jetpack Compose (UI), Oboe (Áudio em Tempo Real), MediaPipe / YAMNet
- **Hardware Base**: Dispositivos Android 10+ com suporte para alinhamento de microfone estéreo para precisão de rumo TDOA.

---

## 📊 Diretrizes de Privacidade e Segurança

- **Isolamento Local Primeiro**: Todas as classificações de áudio, matemática espectral e projeções de rumo acontecem exclusivamente no dispositivo. Fluxos de áudio brutos nunca são gravados, armazenados em cache ou transmitidos sob qualquer condição.
- **Sem Telemetria ou Diagnóstico Remoto**: O Vigilant Ear foi projetado para operar inteiramente localmente em seu dispositivo. Não coletamos, transmitimos ou armazenamos telemetria remota, logs de falhas, registros de diagnóstico ou análises de uso em nossos servidores.

---

## ⚖️ Aviso Legal

O Vigilant Ear é uma pesquisa acústica experimental e um auxílio de acessibilidade espacial. Não é certificado como um utilitário de segurança de vida. A resolução de rastreamento pode flutuar dinamicamente com base na topologia regional, condições climáticas prevalecentes, condições do vento e calibração de hardware do microfone. Os usuários devem sempre manter a percepção ambiental normal.

**E-mail de Contato:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

O Vigilant Ear é uma ferramenta de acessibilidade construída com cuidado. Por favor, use-o com responsabilidade.

Feito com ❤️ para a comunidade D/HH e pesquisa acústica.

© 2026 Wingdings, Inc.  
Todos os direitos reservados.
