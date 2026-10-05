# Suporte do Vigilant Ear 👂🛰️

Obrigado por usar o **Vigilant Ear**. A nossa missão é fornecer uma maior consciência situacional através de detecção avançada de eventos acústicos e alertas de emergência em tempo real.

## Contate-nos

Se você estiver enfrentando problemas técnicos, tiver dúvidas sobre a precisão dos alertas ou quiser fornecer feedback, entre em contato conosco por e-mail em:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Vídeos

Vídeos curtos com tudo na tela — nada que você precise ouvir. Alguns também têm narração, mas nada existe apenas em áudio.

- **[Mudar o idioma das legendas](https://youtu.be/bBTjlWnbFr4)** — trocar o idioma do app e ativar o **Auto-Translate**, incluindo o passo que quase todos perdem: as legendas continuam chegando no idioma antigo até você fechar o app completamente e abri-lo de novo.
- **[Como são os alertas](https://youtu.be/1NCXHqQ-BR8)** — detector de fumaça, batida na porta, choro de bebê, sirene, clima severo e uma confirmação de terremoto, cada um com sua direção.

Mais: **[Tutoriais](https://www.youtube.com/playlist?list=PLV5sYptGyafo)** · **[Exemplos](https://www.youtube.com/playlist?list=PLYc8NrtyfisY)**

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

O Vigilant Ear usa dados oficiais de governos no padrão CAP (Common Alerting Protocol), então os alertas são tão precisos quanto os avisos publicados pelas agências que os emitem. As fontes oficiais cobrem mais de 140 países e territórios, e novas fontes são adicionadas com frequência. Todo aviso chega ao seu telefone pelo relay de alertas do próprio Vigilant Ear, que consulta os feeds oficiais a cada poucos minutos. O radar meteorológico do mapa usa radares nacionais onde eles estão disponíveis e a estimativa de chuva por satélite da NOAA em quase todo o resto do mundo. A simulação de localização, lacunas de cobertura ou atrasos na rede podem ocasionalmente afetar a frequência de atualização.

### O aplicativo funciona em segundo plano?

Sim. O Vigilant Ear foi projetado para monitorar eventos acústicos críticos enquanto estiver em segundo plano, quando as permissões necessárias estiverem habilitadas e pelo menos uma categoria de alerta estiver ativada.

### Posso sentir os alertas em um relógio ou pulseira que não seja o Apple Watch?

Sim. Os alertas do Vigilant Ear são notificações comuns do iPhone, então a maioria dos relógios e pulseiras que mostram notificações do iPhone vai vibrar com eles — com a vibração do próprio aparelho, não com os padrões característicos do Vigilant Ear, que exigem o Apple Watch. Em qualquer marca, vá em **Ajustes → Bluetooth** no iPhone, toque em ⓘ ao lado do relógio ou da pulseira, confirme que **Compartilhar Notificações do Sistema** está ativado e mantenha o iPhone ao alcance do Bluetooth (a mesa de cabeceira serve). Os alertas urgentes do Vigilant Ear são enviados como Notificações Relevantes, então passam pelo Foco Sono do próprio iPhone, a menos que você tenha desativado as Notificações Relevantes.

Se você usa o relógio ou a pulseira para dormir, confira as configurações de sono e de Não Perturbe do próprio aparelho: elas silenciam tudo, inclusive o Vigilant Ear.

- **Garmin** — No app Garmin Connect, abra as configurações do seu dispositivo e ative **Smart Notifications** (em **Notifications & Alerts**). O Garmin pode ativar o Não Perturbe automaticamente enquanto você dorme, o que impede que ele vibre com notificações; desative essa opção para sentir os alertas à noite. O nome e o local dessa configuração variam conforme o modelo, então consulte o manual do seu relógio.
- **Fitbit** — No app Fitbit, abra as configurações de **Notifications** do seu dispositivo e ative as notificações de apps para o Vigilant Ear. O **Sleep Mode** e o **Do Not Disturb** do Fitbit silenciam todas as notificações, então deixe os dois desativados à noite.
- **Amazfit** — No app Zepp, abra o seu dispositivo, depois **Notifications and Reminder → App Alerts → Manage Apps**, e selecione o Vigilant Ear. O modo Não Perturbe do próprio relógio bloqueia os alertas, então desative-o à noite.
- **Xiaomi Smart Band** — No app Mi Fitness, ative as notificações de apps e o botão do Vigilant Ear. A pulseira fica em silêncio no modo Não Perturbe ou no modo de sono, então desative os dois à noite; com **Notify only when worn** ativado, ela também fica em silêncio enquanto não estiver no seu pulso.
- **Huawei** — No app HUAWEI Health, abra o seu dispositivo, toque em **Notifications** e ative o botão do Vigilant Ear. O Não Perturbe, configurado no mesmo app, impede que a pulseira vibre durante o horário programado, então desative-o (ou deixe as suas horas de sono fora da programação) para sentir os alertas à noite.
- **Pebble** — No app Pebble Core, verifique se o Vigilant Ear está ativado na aba **Notifications**. O **Quiet Time** silencia notificações e vibração, então deixe-o desativado à noite.

O Samsung Galaxy Watch e o Google Pixel Watch não funcionam com o iPhone, e anéis como o Oura não conseguem vibrar com notificações.

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
- Feeds de clima severo para a sua região — **fontes oficiais em mais de 140 países e territórios**, e novas fontes são adicionadas com frequência  
- Prática de alertas da **Zona de Testes** (com marca d'água para que nunca pareçam uma emergência real)  
- Dicas de direção de companheiro do **Apple Watch** e **Live Activity** (Tela de Bloqueio / Dynamic Island / Conjunto Inteligente do Watch), onde disponível  
- **Escopo Acústico** — o visualizador de som ao vivo, grátis para todos (as ferramentas de captura para treinamento são do Power Pack+)  

O **Power Pack+** é um desbloqueio único (**não é uma assinatura**) com um **teste gratuito de 90 dias**. Ele adiciona:

- **Auto-Translate** — tradução no dispositivo de fala próxima para o seu idioma  
- **Constellation** — audição compartilhada em vários iPhones sobre Ultra-Wideband  
- **Identificação de Música (Music ID)** — reconhecimento de música do ShazamKit  

Tudo para reconhecimento ainda roda no seu dispositivo; o Power Pack+ muda apenas quais recursos são desbloqueados, nunca para onde o áudio bruto é enviado para análise.

### Como faço para gerenciar o Shazam e a tradução?

Estes ficam no **Power Pack+** no aplicativo (brilhos no leque de ações / menu):

- **Shazam (Music ID)** — identificação de música ambiental no radar espacial (Power Pack+)  
- **Auto-Translate** — traduzir legendas ao vivo para o seu idioma (Power Pack+)  

Os feeds de clima severo são **gratuitos** e gerenciados nas preferências de clima / alerta — eles não são um complemento do Power Pack+.

### Como desativo o microfone quando o aplicativo não está em primeiro plano?

O aplicativo para de usar o microfone para monitoramento em segundo plano quando *todas* as categorias de alerta estão desligadas em Preferências. Ele não escuta ou envia notificações de som em segundo plano quando todas as categorias estão desativadas. Quando pelo menos um alerta está ativado, o microfone pode ser usado para coleta de som em segundo plano.

Você também pode revogar completamente o acesso ao Microfone em Ajustes do iOS (isso interrompe todos os recursos acústicos, incluindo a escuta em primeiro plano).

### Por que o aplicativo não detecta consistentemente *todos* os sons?

Sons agudos como alarmes e sirenes de caminhões de bombeiros são relativamente fáceis de serem detectados pelo mecanismo ML de som. Sons de banda larga (como motores de carros ou pneus) são mais difíceis; nós fazemos um trabalho adequado, mas imperfeito, devido aos limites de hardware do telefone. Os algoritmos de Diferença de Tempo de Chegada (TDOA) são precisos até certo ponto, dada a curta distância entre os microfones. A direção precisa de um iPhone com microfone estéreo; iPads são focados em legendas sem rumo completo.

### Como a Zona de Testes e os alertas de prática funcionam?

Abra a **Zona de Testes** (varinha) para experimentar sons de prática Home & Street e outras prévias. Os eventos de prática estão claramente marcados como **PREVIEW** para que nunca se passem por uma emergência real. Fechar a Zona de Testes encerra o estado de prática (incluindo simulação temporária de GPS usada em algumas demonstrações).

### Por que uma legenda mudou logo depois de aparecer?

É o app verificando a si mesmo. Logo após uma frase ser finalizada, o Vigilant Ear relê os últimos segundos de áudio com contexto completo e — em cerca de dois segundos — pode recuperar uma palavra perdida ou corrigir uma mal ouvida. Depois disso, o texto nunca mais muda. Tudo acontece no seu aparelho, como sempre.

---

*O Vigilant Ear é uma ferramenta de acessibilidade construída com cuidado. Por favor, use-o de forma responsável.* 

Feito com ❤️ para a comunidade Surda/Com deficiência auditiva (D/HH) e pesquisa acústica.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Todos os direitos reservados.<br />
  Patente Pendente
</p>
