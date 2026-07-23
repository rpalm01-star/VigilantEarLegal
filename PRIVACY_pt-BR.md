# Política de Privacidade do Vigilant Ear 👂🛰️

**Data de Vigência:** 11 de julho de 2026

## Introdução

O Vigilant Ear ("nós" ou "nosso") está comprometido em proteger a sua privacidade. Esta Política de Privacidade explica quais informações o aplicativo processa, o que permanece no seu dispositivo e quando dados limitados podem ser enviados pela internet para fornecer recursos específicos.

## Privacidade em Resumo

- **A detecção acústica central é executada no seu dispositivo.** A classificação de som, o rastreamento direcional, as legendas ao vivo e a lógica de alerta são projetados para funcionar localmente usando o microfone e os sensores do seu telefone.
- **Nós não vendemos os seus dados** e não usamos SDKs de publicidade ou análise comportamental.
- **Não armazenamos nem fazemos upload de gravações de áudio.** O áudio do microfone é processado em tempo real para detecção e (quando ativado) legendas; ele não é salvo como um arquivo de som pelo Vigilant Ear para reprodução posterior ou análise em nuvem.
- **Alguns recursos usam a internet** — mapas, feeds de clima severo, identificação opcional de música, dados de estradas, compras na loja de aplicativos, tráfego opcional de malha de vários telefones entre os *seus* dispositivos e carregamento de páginas jurídicas no aplicativo. Eles são descritos abaixo.
- **Você permanece no controle.** Você pode desativar a identificação de música do Shazam, desligar categorias de alerta, deixar o Constellation desligado, revogar permissões nas configurações do sistema ou interromper a escuta em segundo plano a qualquer momento.

## Informações Processadas no Seu Dispositivo

Com a sua permissão, o Vigilant Ear acessa o seguinte **localmente**:

- **Áudio do microfone** — Usado em tempo real para detectar sons ambientais (sirenes, veículos, campainhas, choro de bebê, pessoas próximas, etc.), estimar a direção e (quando o Speaker Mode está ativado) produzir legendas ao vivo e tradução opcional no dispositivo.
- **Reconhecimento de fala (no dispositivo)** — Quando as legendas estão ativadas, os frameworks de fala do seu dispositivo transcrevem a fala próxima em texto no telefone. O texto da legenda é exibido ao vivo e não é arquivado pelo Vigilant Ear como um histórico de transcrição permanente; os registros de depuração não incluem conteúdo de legenda.
- **Localização** — Usada para colocar sons detectados e áreas de alerta meteorológico no mapa e para melhorar a orientação direcional.
- **Orientação e movimento do dispositivo** — Usados para melhorar a precisão da direção.
- **Câmera (opcional)** — Usada apenas se você abrir a visualização AR de câmera “veja o som”, para que os marcadores possam ser fixados na visualização ao vivo da câmera. Os quadros da câmera são usados para exibição no dispositivo; eles não são carregados pelo Vigilant Ear para reconhecimento de som.
- **Apple Watch (opcional)** — Quando um companheiro Watch está disponível, rótulos de alerta e dicas de direção podem ser retransmitidos para o Watch emparelhado para que você possa olhar para o seu pulso.

Este processamento no dispositivo é o coração do aplicativo. Aplicativos concorrentes costumam transmitir áudio para a nuvem para análise e monetização. O Vigilant Ear é construído de forma diferente: o seu pipeline de conscientização acústica é projetado para rodar no próprio telefone.

## Rede e Serviços de Terceiros

Quando você usa certos recursos — ou quando o aplicativo precisa deles para funcionar — **dados limitados podem sair do seu dispositivo** e ser manipulados por serviços de terceiros sob suas próprias políticas de privacidade:

*   **Exibição de mapa**
    *   *O que é enviado:* Solicitações de blocos de mapa; a janela de visualização do seu mapa e localização aproximada conforme necessário para renderizar o mapa
    *   *Provedor:* Apple Maps / MapKit
*   **Alertas de clima severo**
    *   *O que é enviado:* Solicitações para feeds meteorológicos públicos CAP/Atom; a sua região geral pode ser inferida a partir da seleção do feed e da localização do dispositivo
    *   *Provedor:* National Weather Service dos EUA, MeteoGate (Europa), Administração Meteorológica da China (CMA), Administração Meteorológica da Coreia (KMA), fontes públicas relacionadas à OMM e feeds públicos de alertas semelhantes
*   **Alertas de terremoto**
    *   *O que é enviado:* Solicitações a um único feed público mundial de resumo de terremotos — a solicitação não contém nenhuma informação de localização ou região; a localização do seu dispositivo é usada apenas no dispositivo para decidir se um terremoto relatado está perto de você
    *   *Provedor:* Feed público de terremotos do Serviço Geológico dos EUA (USGS)
*   **Identificação de música (opcional, Power Pack+)**
    *   *O que é enviado:* Curtas impressões digitais de áudio — nunca áudio bruto — quando a música é detectada e o Shazam está ativado (pode ser desativado nas configurações)
    *   *Provedor:* Apple Shazam / ShazamKit
*   **Contexto de estradas**
    *   *O que é enviado:* Consultas anônimas à API Overpass baseadas no setor do mapa em torno de sua localização
    *   *Provedor:* Contribuidores do OpenStreetMap via API Overpass
*   **Compras e direitos**
    *   *O que é enviado:* Tokens de compra e status de direitos / teste para o desbloqueio opcional e único do Power Pack+ (não é uma assinatura)
    *   *Provedor:* Apple App Store
*   **Malha Constellation (opcional, Power Pack+)**
    *   *O que é enviado:* Quando você ativa o Constellation para vários telefones, os dispositivos participantes trocam os metadados acústicos necessários para uma imagem compartilhada — por exemplo, pose relativa / alcance Ultra-Wideband onde disponível, direções, rótulos de som e texto de legenda efêmero. O tráfego é ponto-a-ponto entre os telefones que você vincula; a Wingdings não opera um relé de malha em nuvem para este pipeline de áudio.
    *   *Provedor:* Frameworks da Apple (por exemplo, Rede / Nearby Interaction) entre os seus dispositivos
*   **Documentos legais no aplicativo**
    *   *O que é enviado:* Solicitações da web padrão quando você abre as páginas de Política de Privacidade, Termos, Suporte ou README do produto no aplicativo
    *   *Provedor:* GitHub (hospedagem de documentos)

Nós escolhemos esses serviços para fornecer funcionalidades de mapa, clima, rótulo de música, compra e vários dispositivos. **A Wingdings não recebe o áudio do seu microfone, o histórico de localização contínuo ou informações de contato desses provedores.**

## O que a Wingdings Coleta

### Sem Telemetria ou Diagnóstico Remoto

O Vigilant Ear é projetado para operar inteiramente localmente no seu dispositivo. Nós não coletamos, transmitimos ou armazenamos telemetria remota, registros de falhas, registros de diagnóstico ou análises de uso nos servidores da Wingdings. Registros de depuração **locais** opcionais podem ser gravados no dispositivo para solução de problemas; eles não são carregados pelo aplicativo como um pipeline de telemetria e o texto da legenda não é incluído no conteúdo de depuração exportado.

## O que Nós Não Fazemos

Nós **não** fazemos o seguinte:

- Vender ou alugar as suas informações pessoais
- Armazenar gravações de áudio ambiental nos nossos servidores
- Executar redes de anúncios, rastreadores entre aplicativos ou SDKs de perfil comportamental
- Carregar o seu rastro de localização contínua para a Wingdings
- Fazer upload de áudio bruto do microfone para nuvem de fala ou reconhecimento de som

## Suas Escolhas e Controles

Você pode:

- **Revogar permissões** (microfone, localização, câmera, notificações, reconhecimento de fala) em Ajustes do iOS
- **Desativar a identificação de música do Shazam** no Power Pack+ / preferências
- **Desativar categorias de alerta individuais** (sirenes, clima, campainhas, bebê, etc.)
- **Interromper a audição em segundo plano** quando todas as categorias de alerta estiverem desativadas
- **Deixar o Constellation desligado** para que nenhum metadado de malha seja compartilhado com outros telefones
- **Usar a Zona de Testes** para visualizar alertas e recursos localmente com uma marca d'água PREVIEW clara, sem implicar uma emergência real

## Diretrizes da Plataforma

O Vigilant Ear segue os requisitos de privacidade da Apple App Store e as diretrizes da Apple para aplicativos que atendem a pessoas com necessidades de acessibilidade. Nós atualizamos esta política quando nossas práticas ou obrigações de plataforma mudam.

## Alterações a Esta Política

Nós podemos atualizar esta Política de Privacidade de tempos em tempos. Alterações materiais serão refletidas atualizando a **Data de Vigência** no topo desta página.

## Contate-nos

Se você tiver dúvidas sobre esta Política de Privacidade, contate-nos em:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ O Vigilant Ear foi desenvolvido com amor e respeito pela comunidade Surda e com deficiência auditiva. A sua confiança é importante para nós.

*O Vigilant Ear é uma ferramenta de acessibilidade construída com cuidado. Por favor, use-o de forma responsável.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Todos os direitos reservados.<br />
  Patente Pendente
</p>
