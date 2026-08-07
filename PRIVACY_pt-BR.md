# Política de Privacidade do Vigilant Ear 👂🛰️

**Data de Vigência:** 4 de agosto de 2026

## Introdução

O Vigilant Ear ("nós" ou "nosso") está comprometido em proteger a sua privacidade. Esta Política de Privacidade explica quais informações o aplicativo processa, o que permanece no seu dispositivo e quando dados limitados podem ser enviados pela internet para fornecer recursos específicos.

## Privacidade em Resumo

- **A detecção acústica central é executada no seu dispositivo.** A classificação de som, o rastreamento direcional, as legendas ao vivo e a lógica de alerta são projetados para funcionar localmente usando o microfone e os sensores do seu telefone.
- **Nós não vendemos os seus dados** e não usamos SDKs de publicidade ou análise comportamental.
- **Não armazenamos nem fazemos upload de gravações de áudio.** O áudio do microfone é processado em tempo real para detecção e (quando ativado) legendas; ele não é salvo como um arquivo de som pelo Vigilant Ear para reprodução posterior ou análise em nuvem.
- **Alguns recursos usam a internet** — mapas, feeds de clima severo, identificação opcional de música, dados de estradas, compras na loja de aplicativos, tráfego opcional de malha de vários telefones entre os *seus* dispositivos, carregamento de páginas jurídicas no aplicativo e (somente se você optar por participar) relatórios do Research Array. Eles são descritos abaixo.
- **Você permanece no controle.** Você pode desativar a identificação de música do Shazam, desligar categorias de alerta, deixar o Constellation desligado, deixar o **Research Array** desligado (ele vem desligado por padrão), revogar permissões nas configurações do sistema ou interromper a escuta em segundo plano a qualquer momento.

## Informações Processadas no Seu Dispositivo

Com a sua permissão, o Vigilant Ear acessa o seguinte **localmente**:

- **Áudio do microfone** — Usado em tempo real para detectar sons ambientais (sirenes, veículos, campainhas, choro de bebê, pessoas próximas, etc.), estimar a direção e (quando o Speaker Mode está ativado) produzir legendas ao vivo e tradução opcional no dispositivo.
- **Reconhecimento de fala (no dispositivo)** — Quando as legendas estão ativadas, os frameworks de fala do seu dispositivo transcrevem a fala próxima em texto no telefone. O texto da legenda é exibido ao vivo e não é arquivado pelo Vigilant Ear como um histórico de transcrição permanente; os registros de depuração não incluem conteúdo de legenda.
- **Localização** — Usada para colocar sons detectados e áreas de alerta meteorológico no mapa e para melhorar a orientação direcional.
- **Orientação e movimento do dispositivo** — Usados para melhorar a precisão da direção.
- **Câmera (opcional)** — Usada apenas se você abrir a visualização AR de câmera “veja o som”, para que os marcadores possam ser fixados na visualização ao vivo da câmera. Os quadros da câmera são usados para exibição no dispositivo; eles não são carregados pelo Vigilant Ear para reconhecimento de som.
- **Apple Watch (opcional)** — Quando um companheiro Watch está disponível, rótulos de alerta e dicas de direção podem ser retransmitidos para o Watch emparelhado para que você possa olhar para o seu pulso.
- **Diário de sons do Witness Ear (opcional, desligado por padrão)** — Quando você ativa o Witness Ear, o aplicativo mantém um registro contínuo de **24 horas, no dispositivo**, das classificações de som (hora, rótulo, confiança, nível de pico, direção quando medida e a localização do telefone naquele momento; além de entradas compartilhadas pelos seus telefones vinculados via Constellation). O diário é armazenado apenas na sandbox privada do aplicativo neste telefone e nunca é enviado pelo Vigilant Ear. Ele só sai do telefone dentro de um relatório PDF que **você** escolhe exportar e compartilhar. As entradas com mais de 24 horas são excluídas automaticamente; desligar o Witness Ear pausa o registro (as entradas mantidas continuam expirando) e o controle de lixeira no aplicativo exclui o registro imediatamente. Consulte o guia do Witness Ear para detalhes.

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
    *   *O que é enviado:* Quando você ativa o Constellation para vários telefones, os dispositivos participantes trocam os metadados acústicos necessários para uma imagem compartilhada — por exemplo, pose relativa / alcance Ultra-Wideband onde disponível, direções, rótulos de som e texto de legenda efêmero. O tráfego é ponto-a-ponto **apenas entre telefones que estão executando o Vigilant Ear e que você vincula para o Constellation**. Telefones sem o aplicativo não podem entrar nessa malha nem receber esses metadados. A Wingdings não opera um relé de malha em nuvem para este pipeline de áudio.
    *   *Provedor:* Frameworks da Apple (por exemplo, Rede / Nearby Interaction) entre os seus dispositivos Vigilant Ear
*   **Documentos legais no aplicativo**
    *   *O que é enviado:* Solicitações da web padrão quando você abre as páginas de Política de Privacidade, Termos, Suporte ou README do produto no aplicativo
    *   *Provedor:* GitHub (hospedagem de documentos)
*   **Mapa ao vivo do Research Array (somente visualização)**
    *   *O que é enviado:* Solicitações da web padrão quando você toca em **"Map"** (Mapa) para abrir o painel público do array no seu navegador — como visitar qualquer site. Visualizar não envia nada do seu diário ou das suas detecções.
    *   *Provedor:* Serviço de pesquisa da Wingdings (host da aplicação web)
*   **Research Array (opcional — desligado por padrão)**
    *   *O que é enviado:* Somente se você ativar o recurso: pequenos relatórios de detecção contendo apenas metadados quando um evento qualificado é registrado (hora, localização aproximada, características básicas do sinal, versão do aplicativo). Consulte **Research Array** abaixo.
    *   *Provedor:* Infraestrutura que nós operamos (host da aplicação e provedores de banco de dados, como nossos hosts web e Postgres). Detalhes e limites estão na seção Research Array.

Nós escolhemos esses serviços para fornecer funcionalidades de mapa, clima, rótulo de música, compra, vários dispositivos e (quando você opta por participar) do array de pesquisa. **A Wingdings não recebe o áudio do seu microfone, o histórico de localização contínuo ou informações de contato desses provedores.**

## O que a Wingdings Coleta

### Sem Telemetria ou Diagnóstico Remoto

O Vigilant Ear é projetado para que os recursos centrais de escuta e legendas sejam executados no seu dispositivo. Nós **não** coletamos análises remotas de falhas, telemetria de publicidade ou SDKs de análise geral de uso.

Registros de depuração **locais** opcionais podem ser gravados no dispositivo para solução de problemas; eles não são carregados pelo aplicativo como um pipeline de telemetria e o texto da legenda não é incluído no conteúdo de depuração exportado.

**Exceção — apenas Research Array:** se você optar por participar (veja abaixo), a Wingdings poderá receber os relatórios limitados de eventos que você escolher contribuir. Esse caminho não é análise de publicidade; é uma contribuição de pesquisa opcional que você controla e pode desligar a qualquer momento.

## Research Array (opcional, desligado por padrão)

O Vigilant Ear pode, opcionalmente, contribuir com relatórios de detecção **contendo apenas metadados** para um array de pesquisa que ajuda a construir uma imagem compartilhada de terremotos e outros eventos de baixa frequência / relacionados a infrassom. **Ele vem desligado por padrão e só funciona se você o ativar** — onde o interruptor **Research Array** aparecer nas preferências do aplicativo (ou o rótulo equivalente no seu idioma), você pode ligá-lo ou desligá-lo a qualquer momento. Visualizar a página pública **"Map"** (Mapa) do array é algo separado de contribuir e não compartilha nada do seu registro.

Quando ele está ligado — e somente quando o seu dispositivo registra um evento **qualificado** (por exemplo, um candidato não local de infrassom ou relacionado a sismos suficientemente forte, ou certos sinais de auditoria relacionados a terremotos onde esse caminho está habilitado) — o aplicativo pode enviar um pequeno relatório contendo:

- a hora do evento (usando o relógio do dispositivo em um domínio de tempo global)
- uma localização aproximada, arredondada para cerca de **1 quilômetro** (não o seu endereço exato nem um rastro contínuo)
- características básicas do evento, como o canal do sensor, se o caminho é aéreo ou terrestre, a frequência de pico quando aplicável e uma medida adimensional de intensidade (por exemplo, STA/LTA)
- o tipo de relatório (por exemplo, início de infrassom, candidato sísmico ou auditoria de confirmação de terremoto)
- a versão do aplicativo

**O que nunca é enviado para o Research Array:** áudio, formas de onda, gravações, transcrições, legendas, contatos, identificadores que o aplicativo invente para rotular *você* como pessoa ou instalação, a sua posição GPS precisa (além do arredondamento grosseiro acima) ou qualquer registro contínuo de onde você vai. O áudio nunca sai do seu dispositivo para este ou qualquer outro propósito.

### Para onde vão os relatórios

Os relatórios são enviados apenas por um canal **criptografado (HTTPS)** para um serviço de pesquisa da Wingdings que nós operamos (host da aplicação e banco de dados). O aplicativo não anexa **nenhum ID de pesquisa por usuário ou por dispositivo** e **nenhum identificador de Conta Apple** no conteúdo enviado. Um segredo de aplicação compartilhado pode ser usado para que apenas o nosso aplicativo possa gravar no serviço; esse segredo **não** é um identificador pessoal. Registros padrão de hospedagem e segurança (por exemplo, metadados de rede de curta duração usados para operar o serviço) podem existir, como em qualquer serviço HTTPS; eles não são um recurso do produto para rastrear você e nós não os vendemos.

Desligar o **Research Array** interrompe imediatamente **todos os relatórios futuros**. Isso **não** exclui relatórios já enviados. Como os relatórios não carregam **nenhum identificador por usuário ou por dispositivo**, não podemos localizar nem apagar "tudo o que você contribuiu" depois do fato — não temos uma forma confiável de saber quais relatórios passados vieram de você. Isso é intencional: impede que o fluxo de pesquisa se torne um histórico pessoal sob o nosso controle.

## O que Nós Não Fazemos

Nós **não** fazemos o seguinte:

- Vender ou alugar as suas informações pessoais
- Armazenar gravações de áudio ambiental nos nossos servidores
- Executar redes de anúncios, rastreadores entre aplicativos ou SDKs de perfil comportamental
- Carregar o seu rastro de localização contínua para a Wingdings
- Fazer upload de áudio bruto do microfone para nuvem de fala ou reconhecimento de som
- Exigir o Research Array para os recursos centrais do aplicativo — ele é opcional e vem desligado por padrão

## Suas Escolhas e Controles

Você pode:

- **Revogar permissões** (microfone, localização, câmera, notificações, reconhecimento de fala) em Ajustes do iOS
- **Desativar a identificação de música do Shazam** no Power Pack+ / preferências
- **Desativar categorias de alerta individuais** (sirenes, clima, campainhas, bebê, etc.)
- **Interromper a audição em segundo plano** quando todas as categorias de alerta estiverem desativadas
- **Deixar o Constellation desligado** para que nenhum metadado de malha seja compartilhado com outros telefones que executam o Vigilant Ear. Telefones sem o aplicativo não podem compartilhar esses metadados.
- **Deixar o Research Array desligado** (padrão), ou desligá-lo a qualquer momento nos Ajustes para parar de contribuir com relatórios
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
