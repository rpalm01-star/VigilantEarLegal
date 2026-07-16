# Suporte do Vigilant Ear 👂🛰️

Obrigado por usar o **Vigilant Ear**. A nossa missão é fornecer uma maior consciência situacional através de detecção avançada de eventos acústicos e alertas de emergência em tempo real.

## Contate-nos

Se você estiver enfrentando problemas técnicos, tiver dúvidas sobre a precisão dos alertas ou quiser fornecer feedback, entre em contato conosco por e-mail em:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Perguntas Frequentes

### Como o Vigilant Ear funciona em segundo plano?

O Vigilant Ear escuta quando o monitoramento está ativado e as permissões necessárias são concedidas. Ele é executado de forma eficiente em segundo plano e pode enviar respostas táteis, alertas na tela, notificações push opcionais e (quando emparelhado) dicas de direção do Apple Watch quando detecta sons importantes.

### O Vigilant Ear descarrega a minha bateria?

Não. O Vigilant Ear foi projetado para usar pouca bateria, para que você possa deixá-lo ligado.

Aqui está como mantemos o uso da bateria baixo:  
- Modelos eficientes de aprendizado de máquina no dispositivo que são executados no Neural Engine quando disponível.  
- A escuta em segundo plano hiberna quando *todas* as categorias de alerta estão desligadas.  
- Quase todo o processamento permanece no seu telefone; a rede é limitada a mapas, feeds meteorológicos públicos, ID de música opcional e compras.  
- A limitação inteligente reduz o trabalho quando a cena acústica está silenciosa.  
- O processamento matemático pesado é executado fora do thread de exibição e apenas quando necessário.

### Por que o aplicativo não está detectando sirenes?

Certifique-se de ter concedido permissão de **Microfone** em Ajustes do iOS. O Vigilant Ear precisa do microfone para processar assinaturas acústicas. Confirme se **Siren** (ou a categoria relevante) está ativada nas Preferências e se as notificações foram permitidas se você espera alertas push. As respostas táteis podem ser mais silenciosas se o dispositivo estiver no Modo Silencioso, dependendo das configurações do sistema.

### Quão precisos são os alertas de clima?

O Vigilant Ear consulta feeds oficiais de governos CAP (Common Alerting Protocol). Os alertas são tão precisos quanto os dados fornecidos pelo National Weather Service e outras agências internacionais (incluindo MeteoGate na Europa, CMA na China e KMA na Coreia). A simulação de localização, lacunas de cobertura ou atrasos na rede podem ocasionalmente afetar a frequência de atualização.

### O aplicativo funciona em segundo plano?

Sim. O Vigilant Ear foi projetado para monitorar eventos acústicos críticos enquanto estiver em segundo plano, quando as permissões necessárias estiverem habilitadas e pelo menos uma categoria de alerta estiver ativada.

### O que os interruptores de alerta controlam?

Os interruptores de categoria de alerta em **Preferências** controlam se o Vigilant Ear trata esses sons como dignos de alerta para **notificações** (e entrega relacionada) quando sons correspondentes são detectados.

Esses interruptores afetam principalmente a entrega em **segundo plano / notificação**. Eles **não** desligam a exibição do mapa e do radar na tela quando o aplicativo está aberto em primeiro plano.

As categorias típicas incluem:  
- **Siren Alerts** — Sirenes de veículos de emergência (polícia, bombeiros, ambulância, etc.)  
- **Alarms** — Detectores de fumaça e alarmes de incêndio  
- **Knocks** — Batidas em portas e campainhas  
- **Baby** — Choro de bebê (quando ativado)  
- **Weather Alerts** — Avisos de clima severo de fontes CAP governamentais oficiais  
- **People Alerts** — Pessoas próximas (muitas vezes melhor em ambientes mais silenciosos; pode permanecer como opção)

A **permissão de notificação** é o interruptor mestre no nível do sistema. Se você negar notificações na tela de verificação de inicialização (ou mais tarde em Ajustes do iOS), não receberá alertas push, mesmo se categorias individuais estiverem ativadas. Alertas na tela enquanto o aplicativo estiver aberto ainda poderão aparecer.

### O que é gratuito e o que é o Power Pack+?

O núcleo de segurança é **gratuito, para sempre**:

- Alertas sonoros locais (sirenes, alarmes, batidas/campainhas, bebê, pessoa por perto) com entrega na tela e notificações push opcionais  
- Legendas ao vivo do **Speaker Mode** (no dispositivo; direcional onde o hardware permite)  
- Feeds CAP de clima severo para a sua região — **NWS** dos EUA, **MeteoGate** da Europa, **CMA** da China e **KMA** da Coreia  
- Prática de alertas do **Demo Mode** (com marca d'água para que nunca pareçam uma emergência real)  
- Dicas de direção de companheiro do **Apple Watch** e **Live Activity** (Tela de Bloqueio / Dynamic Island / Conjunto Inteligente do Watch), onde disponível  

O **Power Pack+** é um desbloqueio único (**não é uma assinatura**) com um **teste gratuito de 90 dias**. Ele adiciona:

- **Speaker Auto-Translate** — tradução no dispositivo de fala próxima para o seu idioma  
- **Constellation** — audição compartilhada em vários iPhones sobre Ultra-Wideband  
- **Identificação de Música (Music ID)** — reconhecimento de música do ShazamKit  

Tudo para reconhecimento ainda roda no seu dispositivo; o Power Pack+ muda apenas quais recursos são desbloqueados, nunca para onde o áudio bruto é enviado para análise.

### Como faço para gerenciar o Shazam e a tradução?

Estes ficam no **Power Pack+** no aplicativo (brilhos no leque de ações / menu):

- **Shazam (Music ID)** — identificação de música ambiental no radar espacial (Power Pack+)  
- **Speaker Auto-Translate** — traduzir legendas ao vivo para o seu idioma (Power Pack+)  

Os feeds de clima severo são **gratuitos** e gerenciados nas preferências de clima / alerta — eles não são um complemento do Power Pack+.

### Como desativo o microfone quando o aplicativo não está em primeiro plano?

O aplicativo para de usar o microfone para monitoramento em segundo plano quando *todas* as categorias de alerta estão desligadas em Preferências. Ele não escuta ou envia notificações de som em segundo plano quando todas as categorias estão desativadas. Quando pelo menos um alerta está ativado, o microfone pode ser usado para coleta de som em segundo plano.

Você também pode revogar completamente o acesso ao Microfone em Ajustes do iOS (isso interrompe todos os recursos acústicos, incluindo a escuta em primeiro plano).

### Por que o aplicativo não detecta consistentemente *todos* os sons?

Sons agudos como alarmes e sirenes de caminhões de bombeiros são relativamente fáceis de serem detectados pelo mecanismo ML de som. Sons de banda larga (como motores de carros ou pneus) são mais difíceis; nós fazemos um trabalho adequado, mas imperfeito, devido aos limites de hardware do telefone. Os algoritmos de Diferença de Tempo de Chegada (TDOA) são precisos até certo ponto, dada a curta distância entre os microfones. A direção precisa de um iPhone com microfone estéreo; iPads são focados em legendas sem rumo completo.

### Como o Demo Mode e os alertas de prática funcionam?

Abra o **Demo Mode** (varinha) para experimentar sons de prática Home & Street e outras prévias. Os eventos de prática estão claramente marcados como **DEMO:** para que nunca se passem por uma emergência real. Fechar o Demo Mode encerra o estado de prática (incluindo simulação temporária de GPS usada em algumas demonstrações).

---

*O Vigilant Ear é uma ferramenta de acessibilidade construída com cuidado. Por favor, use-o de forma responsável.* 

Feito com ❤️ para a comunidade Surda/Com deficiência auditiva (D/HH) e pesquisa acústica.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Todos os direitos reservados.<br />
  Patente Pendente
</p>
