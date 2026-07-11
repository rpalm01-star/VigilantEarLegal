# Suporte do Vigilant Ear 👂🛰️

Obrigado por usar o **Vigilant Ear**. Nossa missão é oferecer consciência situacional aprimorada por meio de detecção avançada de eventos acústicos e alertas de emergência em tempo real.

## Fale conosco

Se você está enfrentando problemas técnicos, tem dúvidas sobre a precisão dos alertas ou gostaria de enviar feedback, entre em contato por e-mail em:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Perguntas frequentes

### Como o Vigilant Ear funciona em segundo plano?

O Vigilant Ear escuta quando o monitoramento está ligado e as permissões necessárias foram concedidas. Ele roda de forma eficiente em segundo plano e pode enviar hápticos, alertas na tela, notificações push opcionais e (quando emparelhado) pistas de direção no Apple Watch quando detecta sons importantes.

### O Vigilant Ear drena a bateria?

Não. O Vigilant Ear é projetado para usar pouca bateria, para que você possa deixá-lo ligado.

Veja como mantemos o uso de bateria baixo:  
- Modelos eficientes de aprendizado de máquina no dispositivo que rodam no Neural Engine quando disponível.  
- A escuta em segundo plano hiberna quando *todas* as categorias de alerta estão desligadas.  
- Quase todo o processamento permanece no seu telefone; a rede se limita a mapas, feeds públicos de clima, ID de música opcional e compras.  
- O throttling inteligente reduz o trabalho quando a cena acústica está quieta.  
- A matemática pesada roda fora da thread de exibição e só quando necessário.

### Por que o app não está detectando sirenes?

Certifique-se de ter concedido permissão de **Microfone** em Ajustes do iOS. O Vigilant Ear precisa do mic para processar assinaturas acústicas. Confirme que **Sirene** (ou a categoria relevante) está habilitada em Preferências e que as notificações foram permitidas se você espera alertas push. Os hápticos podem ficar mais suaves se o dispositivo estiver no Modo Silencioso, dependendo das configurações do sistema.

### Quão precisos são os alertas meteorológicos?

O Vigilant Ear consulta feeds CAP (Common Alerting Protocol) oficiais do governo. Os alertas são tão precisos quanto os dados fornecidos pelo National Weather Service e outras agências internacionais (incluindo MeteoGate na Europa, CMA na China e KMA na Coreia). Simulação de localização, lacunas de cobertura ou atrasos de rede podem ocasionalmente afetar a frequência de atualização.

### O app funciona em segundo plano?

Sim. O Vigilant Ear é projetado para monitorar eventos acústicos críticos em segundo plano quando as permissões necessárias estão habilitadas e pelo menos uma categoria de alerta está ligada.

### O que os interruptores de alerta controlam?

Os interruptores de categoria de alerta em **Preferências** controlam se o Vigilant Ear trata esses sons como dignos de alerta para **notificações** (e entrega relacionada) quando sons correspondentes são detectados.

Esses interruptores afetam principalmente a entrega em **segundo plano / notificação**. Eles **não** desligam a exibição de mapa e radar na tela quando o app está aberto em primeiro plano.

Categorias típicas incluem:  
- **Alertas de Sirene** — Sirenes de veículos de emergência (polícia, bombeiros, ambulância etc.)  
- **Alarmes** — Detectores de fumaça e alarmes de incêndio  
- **Batidas** — Batidas na porta e campainhas  
- **Bebê** — Choro de bebê (quando habilitado)  
- **Alertas de Clima** — Avisos de clima severo de fontes CAP oficiais do governo  
- **Alertas de Pessoas** — Pessoas por perto (muitas vezes melhor em ambientes mais quietos; pode permanecer opt-in)

A **permissão de notificação** é o interruptor mestre no nível do sistema. Se você negar notificações na tela de verificação na inicialização (ou depois em Ajustes do iOS), você não receberá alertas push mesmo se categorias individuais estiverem ligadas. Alertas na tela enquanto o app está aberto ainda podem aparecer.

### O que é grátis e o que é Power Pack+?

O núcleo de segurança é **grátis, para sempre**:

- Alertas de som local (sirenes, alarmes, batidas/campainhas, bebê, pessoa por perto) com entrega na tela e push opcional  
- Legendas ao vivo do **Speaker Mode** (no dispositivo; direcionais onde o hardware permite)  
- Feeds CAP de clima severo para a sua região — **NWS** dos EUA, **MeteoGate** da Europa, **CMA** da China e **KMA** da Coreia  
- Alertas de prática do **Demo Mode** (com marca d’água para nunca parecerem uma emergência ao vivo)  
- Pistas de direção do companion do **Apple Watch** e **Live Activity** (Tela de Bloqueio / Dynamic Island / Watch Smart Stack), onde disponível  

O **Power Pack+** é um desbloqueio único (**não é assinatura**) com um **teste gratuito de 90 dias**. Ele adiciona:

- **Speaker Auto-Translate** — tradução no dispositivo da fala próxima para o seu idioma  
- **Constellation** — audição compartilhada multi-iPhone via Ultra-Wideband  
- **Music ID** — reconhecimento de músicas com ShazamKit  

Tudo para reconhecimento ainda roda no seu dispositivo; o Power Pack+ só muda quais recursos estão desbloqueados, nunca para onde o áudio bruto é enviado para análise.

### Como gerencio Shazam e tradução?

Estes ficam em **Power Pack+** no app (faíscas do leque de ações / menu):

- **Shazam (Music ID)** — identificação ambiental de música no radar espacial (Power Pack+)  
- **Speaker Auto-Translate** — traduz legendas ao vivo para o seu idioma (Power Pack+)  

Os feeds de clima severo são **grátis** e gerenciados com as preferências de clima / alerta — não são um extra do Power Pack+.

### Como desativo o microfone quando o app não está em primeiro plano?

O app para de usar o microfone para monitoramento em segundo plano quando *todos* os interruptores de categoria de alerta estão desligados em Preferências. Ele não escuta nem envia notificações de som em segundo plano quando todas as categorias estão desabilitadas. Quando pelo menos um alerta está habilitado, o microfone pode ser usado para coleta de som em segundo plano.

Você também pode revogar totalmente o acesso ao Microfone em Ajustes do iOS (isso interrompe todos os recursos acústicos, inclusive a escuta em primeiro plano).

### Por que o app não detecta de forma consistente *todos* os sons?

Sons agudos como alarmes e sirenes de caminhão de bombeiros são relativamente fáceis para o motor de ML de som detectar. Sons de banda larga (como motores de carro ou pneus) são mais difíceis; fazemos um trabalho adequado, porém imperfeito, dadas as limitações do hardware do telefone. Algoritmos de Time Difference of Arrival (TDOA) só são tão precisos dada a curta distância entre microfones. A direção precisa de um iPhone com mic estéreo; iPads são focados em legendas sem rumo completo.

### Como funcionam o Demo Mode e os alertas de prática?

Abra o **Demo Mode** (varinha) para experimentar sons de prática Home & Street e outras prévias. Eventos de prática são claramente marcados com **DEMO:** para nunca fingirem ser uma emergência real. Fechar o Demo Mode desmonta o estado de prática (incluindo spoof temporário de GPS usado em algumas demos).

---

*O Vigilant Ear é uma ferramenta de acessibilidade feita com cuidado. Use-o com responsabilidade.* 

Feito com ❤️ para a comunidade D/HH e a pesquisa acústica.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
