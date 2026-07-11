# Política de Privacidade do Vigilant Ear 👂🛰️

**Data de vigência:** 11 de julho de 2026

## Introdução

O Vigilant Ear (“nós”, “nos” ou “nosso”) está comprometido em proteger sua privacidade. Esta Política de Privacidade explica quais informações o app processa, o que permanece no seu dispositivo e quando dados limitados podem ser enviados pela internet para fornecer recursos específicos.

## Privacidade em resumo

- **A detecção acústica central roda no seu dispositivo.** Classificação de som, rastreamento direcional, legendas ao vivo e lógica de alertas são projetados para funcionar localmente usando o microfone e os sensores do seu telefone.
- **Não vendemos seus dados** e não usamos publicidade nem SDKs de análise comportamental.
- **Não armazenamos nem enviamos gravações de áudio.** O áudio do microfone é processado em tempo real para detecção e (quando habilitado) legendas; o Vigilant Ear não o salva como arquivo de som para reprodução posterior ou análise na nuvem.
- **Alguns recursos usam a internet** — mapas, feeds de clima severo, identificação opcional de música, dados de vias, compras na loja de apps, tráfego opcional de malha multi-telefone entre *seus* dispositivos e carregamento de páginas legais no app. Estes são descritos abaixo.
- **Você permanece no controle.** Você pode desativar a identificação de música do Shazam, desligar categorias de alerta, deixar o Constellation desligado, revogar permissões nas configurações do sistema ou interromper a escuta em segundo plano a qualquer momento.

## Informações processadas no seu dispositivo

Com sua permissão, o Vigilant Ear acessa o seguinte **localmente**:

- **Áudio do microfone** — Usado em tempo real para detectar sons ambientais (sirenes, veículos, campainhas, choro de bebê, pessoas por perto etc.), estimar direção e (quando o Speaker Mode está ligado) produzir legendas ao vivo e tradução opcional no dispositivo.
- **Reconhecimento de fala (no dispositivo)** — Quando as legendas estão habilitadas, os frameworks de fala do seu dispositivo transcrevem a fala próxima em texto no telefone. O texto da legenda é mostrado ao vivo e não é arquivado pelo Vigilant Ear como histórico permanente de transcrição; logs de debug não incluem conteúdo de legenda.
- **Localização** — Usada para posicionar sons detectados e áreas de alerta meteorológico no mapa e para melhorar a orientação direcional.
- **Orientação e movimento do dispositivo** — Usados para melhorar a precisão do rumo.
- **Câmera (opcional)** — Usada somente se você abrir a visualização AR da câmera “ver o som”, para que os marcadores possam ser fixados na prévia ao vivo da câmera. Os frames da câmera são usados para exibição no dispositivo; o Vigilant Ear não os envia para reconhecimento de som.
- **Apple Watch (opcional)** — Quando um companion do Watch está disponível, rótulos de alerta e pistas de direção podem ser retransmitidos ao Watch emparelhado para que você possa olhar o pulso.

Este processamento no dispositivo é o coração do app. Apps concorrentes frequentemente enviam áudio para a nuvem para análise e monetização. O Vigilant Ear é construído de forma diferente: seu pipeline de consciência acústica é projetado para rodar no próprio telefone.

## Rede e serviços de terceiros

Quando você usa certos recursos — ou quando o app precisa deles para funcionar — **dados limitados podem sair do seu dispositivo** e ser tratados por serviços de terceiros sob as próprias políticas de privacidade deles:

*   **Exibição de mapa**
    *   *O que é enviado:* solicitações de tiles de mapa; sua viewport do mapa e localização aproximada conforme necessário para renderizar o mapa
    *   *Provedor:* Apple Maps / MapKit
*   **Alertas de clima severo**
    *   *O que é enviado:* solicitações a feeds públicos CAP/Atom de clima; sua região geral pode ser inferida a partir da seleção do feed e da localização do dispositivo
    *   *Provedor:* U.S. National Weather Service, MeteoGate (Europa), China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), fontes públicas relacionadas à WMO e feeds públicos de alerta semelhantes
*   **Identificação de música (opcional, Power Pack+)**
    *   *O que é enviado:* fingerprints curtos de áudio — nunca áudio bruto — quando música é detectada e o Shazam está habilitado (pode ser desligado nas configurações)
    *   *Provedor:* Apple Shazam / ShazamKit
*   **Contexto de vias**
    *   *O que é enviado:* consultas anônimas à Overpass API com base no setor do mapa ao redor da sua localização
    *   *Provedor:* contribuidores do OpenStreetMap via Overpass API
*   **Compras e entitlements**
    *   *O que é enviado:* tokens de compra e status de entitlement / teste do desbloqueio opcional único do Power Pack+ (não é assinatura)
    *   *Provedor:* Apple App Store
*   **Malha Constellation (opcional, Power Pack+)**
    *   *O que é enviado:* quando você habilita o Constellation multi-telefone, os dispositivos participantes trocam metadados acústicos necessários para um quadro compartilhado — por exemplo pose relativa / ranging Ultra-Wideband onde disponível, rumos, rótulos de som e texto efêmero de legenda. O tráfego é peer-to-peer entre os telefones que você vincula; a Wingdings não opera um relay de malha na nuvem para este pipeline de áudio.
    *   *Provedor:* frameworks da Apple (p. ex. Network / Nearby Interaction) entre seus dispositivos
*   **Documentos legais no app**
    *   *O que é enviado:* solicitações web padrão quando você abre as páginas de Política de Privacidade, Termos, Suporte ou README do produto no app
    *   *Provedor:* GitHub (hospedagem de documentos)

Escolhemos esses serviços para entregar funcionalidade de mapa, clima, rótulo musical, compra e multi-dispositivo. **A Wingdings não recebe seu áudio de microfone, histórico contínuo de localização nem informações de contato desses provedores.**

## O que a Wingdings coleta

### Sem telemetria remota ou diagnósticos

O Vigilant Ear é projetado para operar inteiramente de forma local no seu dispositivo. Não coletamos, transmitimos nem armazenamos telemetria remota, logs de crash, registros de diagnóstico ou análise de uso em servidores da Wingdings. Logs de debug **locais** opcionais podem ser gravados no dispositivo para solução de problemas; eles não são enviados pelo app como pipeline de telemetria, e o texto de legenda não é incluído no conteúdo de debug exportado.

## O que não fazemos

Nós **não**:

- Vendemos ou alugamos suas informações pessoais
- Armazenamos gravações de áudio ambiental em nossos servidores
- Executamos redes de anúncios, rastreadores entre apps ou SDKs de perfil comportamental
- Enviamos sua trilha contínua de localização para a Wingdings
- Enviamos áudio bruto do microfone para reconhecimento de fala ou som na nuvem

## Suas escolhas e controles

Você pode:

- **Revogar permissões** (microfone, localização, câmera, notificações, reconhecimento de fala) em Ajustes do iOS
- **Desativar a identificação de música do Shazam** em Power Pack+ / preferências
- **Desligar categorias individuais de alerta** (sirenes, clima, campainhas, bebê etc.)
- **Interromper a escuta em segundo plano** quando todas as categorias de alerta estiverem desabilitadas
- **Deixar o Constellation desligado** para que nenhum metadado de malha seja compartilhado com outros telefones
- **Usar o Demo Mode** para pré-visualizar alertas e recursos localmente com uma marca d’água DEMO clara, sem implicar uma emergência real

## Diretrizes da plataforma

O Vigilant Ear segue os requisitos de privacidade da Apple App Store e as diretrizes da Apple para apps que atendem pessoas com necessidades de acessibilidade. Atualizamos esta política quando nossas práticas ou obrigações da plataforma mudam.

## Alterações nesta política

Podemos atualizar esta Política de Privacidade de tempos em tempos. Alterações materiais serão refletidas pela atualização da **Data de vigência** no topo desta página.

## Fale conosco

Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ O Vigilant Ear é construído com amor e respeito pela comunidade Surda e com deficiência auditiva. Sua confiança importa para nós.

*O Vigilant Ear é uma ferramenta de acessibilidade feita com cuidado. Use-o com responsabilidade.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
