# Suporte do VigilantEar 👂🛰️

Obrigado por usar o **VigilantEar**. Nossa missão é proporcionar maior percepção da situação ao seu redor por meio de detecção avançada de eventos acústicos e alertas de emergência em tempo real.

## Fale conosco

Se você estiver enfrentando problemas técnicos, tiver dúvidas sobre a precisão dos alertas ou quiser enviar comentários, entre em contato conosco por e-mail:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Perguntas frequentes

### Como o VigilantEar funciona em segundo plano?

O VigilantEar só escuta quando você ativa o monitoramento. Ele funciona de forma eficiente em segundo plano e envia vibrações ou alertas visuais quando detecta sons importantes.

### O VigilantEar consome muita bateria?

Não. O VigilantEar usa muito pouca bateria. Otimizamos o aplicativo com cuidado para que você possa usá-lo o dia inteiro sem preocupações.

Veja exatamente como mantemos o consumo de bateria baixo:  
- Usamos modelos eficientes de aprendizado de máquina que rodam no próprio dispositivo e quase não consomem energia.  
- Paramos de escutar automaticamente quando o aplicativo não está em primeiro plano, caso você desative todos os alertas no painel de configurações.
- Evitamos quase todas as chamadas de dados na nuvem e mantemos o processamento no seu telefone.  
- Adicionamos uma limitação inteligente para reduzir os requisitos de processamento.
- Nossos algoritmos são cálculos matemáticos de precisão que rodam fora do thread de exibição e apenas quando necessário.

### Por que o aplicativo não está detectando sirenes?

Verifique se você concedeu a permissão de **Microfone** nas Configurações do seu telefone. O VigilantEar precisa de acesso ativo ao microfone para processar assinaturas acústicas. Além disso, certifique-se de que o dispositivo não esteja no "Modo Silencioso" se quiser receber feedback tátil.

### Qual é a precisão dos alertas meteorológicos?

O VigilantEar consulta feeds oficiais do governo no formato CAP (Common Alerting Protocol). Os alertas são tão precisos quanto os dados fornecidos pelo National Weather Service e por outras agências internacionais. Simulação de localização ou atrasos de rede podem ocasionalmente afetar a frequência das atualizações.

### O aplicativo funciona em segundo plano?

Sim, o VigilantEar foi projetado para monitorar eventos acústicos críticos em segundo plano, desde que as permissões necessárias estejam habilitadas.

### O que controlam os botões de alerta?

Os principais botões de alerta no **menu de configurações** controlam se o VigilantEar envia uma notificação de alerta para você quando detecta sons correspondentes.  

Esses botões afetam apenas as notificações enviadas enquanto o aplicativo está em segundo plano ou não está aberto ativamente. Eles **não** afetam a exibição de alertas na tela quando o aplicativo está aberto e em primeiro plano.

Os principais botões são:  
- **Alertas de Sirene** — Sirenes de veículos de emergência (polícia, bombeiros, ambulância etc.)  
- **Alarmes** — Detectores de fumaça e alarmes de incêndio  
- **Batidas** — Batidas na porta e campainhas
- **Alertas Meteorológicos** — Avisos de condições climáticas severas de fontes governamentais oficiais  
- **Alertas de Pessoas** — Pessoas por perto (em ambientes silenciosos)  

### O que é gratuito e o que é Premium?

Os recursos essenciais de segurança são **gratuitos para sempre**: alertas locais de som (sirenes, alarmes, batidas e campainhas, uma pessoa por perto) e os avisos de condições climáticas severas do **NWS** dos EUA.

Um desbloqueio **Premium** único — com um teste gratuito para começar, e que **não** é uma assinatura — adiciona o Modo Falante, a Tradução Automática do Falante, a Constelação, o Music ID (Shazam) e os feeds meteorológicos internacionais. Tudo continua rodando no seu dispositivo; o Premium apenas muda quais recursos ficam desbloqueados, nunca para onde vai o seu áudio.

### Como gerencio o Shazam e os feeds meteorológicos internacionais?

Eles fazem parte do Premium e ficam no menu **Premium Features**:
- **Shazam (Music ID)** — Identificação de música ambiente em tempo real, mapeada dinamicamente no seu radar espacial.
- **Feeds Meteorológicos Internacionais** — Fontes adicionais além do NWS gratuito dos EUA: Europa (MeteoAlarm) e China (CMA).  

### Como desativo o microfone quando o aplicativo não está em primeiro plano?

O aplicativo para de usar o microfone completamente no modo de segundo plano quando *todos* os botões de alerta estão desativados no painel de configurações do aplicativo. Ele não escuta nem envia notificações em segundo plano quando todos os botões estão desativados. Quando pelo menos um alerta está ativado, o microfone fica habilitado para a coleta de sons em segundo plano.

### Por que o aplicativo não detecta *todos* os sons de forma consistente?

Sons agudos como alarmes e sirenes de caminhões de bombeiros são relativamente fáceis para o mecanismo de processamento de som por ML detectar. Sons de banda larga (como motores de carro ou pneus) são mais difíceis, mas fazemos um trabalho adequado (ainda que imperfeito) considerando as capacidades limitadas do próprio telefone. Os algoritmos de Time Distance of Arrival (TDOA) têm uma precisão limitada, dada a curta distância entre os microfones.

---

*O VigilantEar é uma ferramenta de acessibilidade desenvolvida com cuidado. Use-a com responsabilidade.* 

Feito com ❤️ para a comunidade D/HH e para a pesquisa acústica.

© 2026 Wingdings, Inc.
Todos os direitos reservados
