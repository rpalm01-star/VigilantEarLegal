# Suporte do VigilantEar 👂🛰️

Obrigado por usar o **VigilantEar**. Nossa missão é fornecer maior percepção situacional por meio de detecção avançada de eventos acústicos e alertas de emergência em tempo real.

## Fale Conosco

Se você estiver enfrentando problemas técnicos, tiver dúvidas sobre a precisão dos alertas ou quiser dar algum feedback, entre em contato conosco por e-mail em:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Perguntas Frequentes

### Como o VigilantEar funciona em segundo plano?

O VigilantEar ouve apenas quando você ativa o monitoramento. Ele funciona de forma eficiente em segundo plano e envia vibrações ou alertas visuais quando detecta sons importantes.

### O VigilantEar descarrega minha bateria?

Não. O VigilantEar usa muito pouca bateria. Otimizamos o aplicativo cuidadosamente para que você possa executá-lo o dia todo sem preocupações.

Aqui está exatamente como mantemos o uso da bateria baixo:
- Usamos modelos eficientes de aprendizado de máquina (ML) no dispositivo que não precisam de quase nenhuma energia.
- Paramos de ouvir automaticamente quando o aplicativo não está em primeiro plano se você desligar todos os alertas no painel de configurações.
- Evitamos quase todas as chamadas de dados na nuvem e mantemos o processamento no seu telefone.
- Adicionamos limitação inteligente (smart throttling) para reduzir os requisitos de processamento.
- Nossos algoritmos são matemática de precisão que funcionam fora do thread de exibição e operam apenas quando necessário.

### Por que o aplicativo não está detectando sirenes?

Certifique-se de ter concedido permissões de **Microfone** nas Configurações do seu telefone. O VigilantEar requer acesso ativo ao microfone para processar assinaturas acústicas. Além disso, certifique-se de que seu dispositivo não esteja no "Modo Silencioso" se você quiser feedback háptico (vibração).

### Quão precisos são os alertas meteorológicos?

O VigilantEar consulta feeds oficiais de CAP (Protocolo de Alerta Comum) do governo. Os alertas são tão precisos quanto os dados fornecidos pelo Serviço Meteorológico Nacional (National Weather Service) e outras agências internacionais. A simulação de localização ou atrasos na rede podem afetar ocasionalmente a frequência das atualizações.

### O aplicativo funciona em segundo plano?

Sim, o VigilantEar foi projetado para monitorar eventos acústicos críticos enquanto estiver em segundo plano, desde que as permissões necessárias estejam habilitadas.

### O que os botões (toggles) de alerta controlam?

Os principais botões de alerta no **menu de configurações** controlam se o VigilantEar envia uma notificação de alerta para você quando detecta sons correspondentes.

Esses botões afetam apenas as notificações enviadas enquanto o aplicativo está em segundo plano ou não está ativamente aberto. Eles **não** afetam a exibição de alertas na tela quando o aplicativo está aberto e em primeiro plano.

Os principais botões são:
- **Alertas de Sirene** — Sirenes de veículos de emergência (polícia, bombeiros, ambulância, etc.)
- **Alarmes** — Detectores de fumaça e alarmes de incêndio
- **Batidas** — Batidas em portas e campainhas
- **Alertas Meteorológicos** — Avisos de condições climáticas severas de fontes governamentais oficiais
- **Alertas de Pessoas** — Pessoas próximas (em ambientes silenciosos)

### Como eu gerencio Fontes de Dados (Data Sources) externas e o Shazam?

Além dos principais alertas acústicos baseados em microfone, você pode habilitar feeds de dados externos adicionais no menu **Fontes de Dados (Data Sources)**:
- **Shazam (Identificação de Música)** — Identificação de música ambiental em tempo real mapeada dinamicamente no seu radar espacial.
- **Feeds Meteorológicos Externos** — Fontes adicionais de dados meteorológicos internacionais, como MeteoGate (Europa) e feeds CMA/MEM (China).

### Como desativo o microfone quando o aplicativo não está em primeiro plano?

O aplicativo para de usar o microfone completamente no modo de segundo plano quando *todos* os botões de alerta são desligados pelo painel de configurações do aplicativo. Ele não ouve nem envia notificações em segundo plano quando todos os botões estão desabilitados. Quando pelo menos um alerta está habilitado, o microfone fica habilitado para coleta de som em segundo plano.

### Por que o aplicativo não detecta consistentemente *todos* os sons?

Sons agudos, como alarmes e sirenes de caminhões de bombeiros, são relativamente fáceis para o mecanismo de processamento de ML de som detectar. Sons de banda larga (como motores de carros ou pneus) são mais difíceis, mas fazemos um trabalho adequado (ainda que imperfeito) considerando os recursos limitados do próprio telefone. Algoritmos de Diferença de Tempo de Chegada (TDOA) têm uma precisão limitada devido à curta distância entre os microfones.

---

*O VigilantEar é uma ferramenta de acessibilidade construída com cuidado. Por favor, use-o com responsabilidade.* 

Feito com ❤️ para a comunidade surda/com deficiência auditiva (D/HH) e pesquisa acústica.

© 2026 Wingdings, Inc.
Todos os direitos reservados
