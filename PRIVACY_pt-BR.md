# Política de Privacidade para Vigilant Ear 👂🛰️

**Data de vigência:** 8 de outubro de 2026

## Introdução

Vigilant Ear ("nós", "nos" ou "nosso") se compromete a proteger a sua privacidade. Esta Política de Privacidade explica quais informações o app processa, o que fica no seu dispositivo e quando dados limitados podem ser enviados pela internet para oferecer recursos específicos.

## Privacidade em resumo

- **A detecção acústica principal funciona no seu dispositivo.** A classificação de som, o rastreamento de direção, as legendas ao vivo e a lógica dos alertas são feitos para funcionar localmente, usando o microfone e os sensores do seu telefone.
- **Não vendemos os seus dados,** e o app não inclui publicidade nem ferramentas de rastreamento de uso.
- **Não armazenamos nem enviamos gravações de áudio.** O áudio do microfone é processado em tempo real para detecção e, quando você liga as legendas, para transformar fala em texto. Ele nunca é salvo como arquivo de som e nunca é enviado para análise. Enquanto uma legenda está sendo escrita, o telefone guarda até cerca de trinta segundos de som na memória de trabalho, para que as primeiras palavras não se percam e uma linha que leva um instante para terminar ainda possa ser incluída. Essa memória temporária não é salva, não é transmitida e desaparece quando você fecha o app. O Rewind traz de volta apenas o **texto** recente das legendas. Nenhum som fica guardado para reproduzir.
- **Alguns recursos usam a internet:** mapas, clima, identificação de música, dados de ruas, compras nas lojas de apps, páginas como esta política, Constellation (que fica entre os seus próprios telefones) e relatórios do Research Array enquanto esse recurso está ligado. Cada um é descrito abaixo.
- **Você continua no controle.** Você pode desligar a identificação de música do Shazam, desligar categorias de alerta, deixar o Constellation desligado, desligar o **Research Array** (ele fica ligado até você desligar), revogar permissões nas configurações do sistema ou parar a escuta em segundo plano.

## Informações processadas no seu dispositivo

Com a sua permissão, o Vigilant Ear usa o seguinte **no seu dispositivo**:

- **Áudio do microfone.** Usado em tempo real para detectar sons do ambiente (sirenes, veículos, campainhas, um bebê chorando, pessoas por perto e sons parecidos), estimar a direção e, quando o Speaker Mode está ligado, produzir legendas ao vivo e tradução opcional no próprio dispositivo.
- **Reconhecimento de fala (no dispositivo).** Quando as legendas estão ligadas, as próprias ferramentas de fala do telefone transformam a fala próxima em texto. O texto da legenda é mostrado ao vivo. O Vigilant Ear não guarda uma transcrição permanente. O texto da legenda é removido de um registro de depuração antes de você poder exportá-lo ou enviá-lo por e-mail para nós. Para escrever os nomes corretamente, o app pode passar a esse reconhecedor no dispositivo uma lista curta de palavras que já estão neste telefone: os nomes de exibição dos telefones do Constellation que você vinculou e o título e o artista de uma música que o Shazam acabou de identificar. O app **não** lê os seus Contatos. Essa lista nunca sai do dispositivo.
- **Name Called (opcional).** Os nomes que você lista para o app avisar quando alguém os diz: o seu, os dos seus filhos ou o nome que chamam no balcão. Eles ficam criptografados neste telefone, ficam de fora das cópias de segurança do dispositivo, são conferidos apenas com as legendas ao vivo no dispositivo e nunca são enviados a lugar nenhum.
- **Localização.** Usada para colocar no mapa os sons detectados e as áreas de alerta de clima, para melhorar a orientação de direção e para lembrar o quão silencioso é um lugar conhecido, para que a detecção de música não precise reaprender isso toda vez que você abre o app. Esse último uso guarda uma latitude sozinha, sem longitude, arredondada para cerca de 100 metros, para no máximo oito lugares. Ela fica nas configurações do próprio app neste telefone e nunca é enviada a lugar nenhum.
- **Orientação e movimento do dispositivo.** Usados para melhorar a direção.
- **Câmera (opcional).** Usada somente se você abrir a vista da câmera que mostra os marcadores de som na prévia ao vivo. Esses quadros ficam no dispositivo. O Vigilant Ear não os envia para reconhecimento de som.
- **Apple Watch (opcional).** Quando um companheiro de Apple Watch está disponível, rótulos de alerta e indicações de direção podem ser enviados ao Apple Watch pareado, para você olhar no pulso.
- **Diário de sons do Witness Ear (opcional, desligado por padrão).** Quando você liga o Witness Ear, o app mantém um registro contínuo de **24 horas** no dispositivo. Cada entrada registra a hora, qual era o som, o quanto o app tinha certeza, o nível de pico, a direção quando uma foi medida e a localização do telefone naquele momento. Uma entrada também pode anotar se o telefone estava carregando, parado ou tocando áudio, o quão precisa foi a localização obtida e, para um som compartilhado por um telefone do Constellation vinculado, o nome e o modelo desse telefone. O diário fica no armazenamento privado do app e nunca é enviado pelo Vigilant Ear. Ele só sai do telefone dentro de um relatório PDF que **você** escolhe exportar e compartilhar. Entradas com mais de 24 horas são apagadas automaticamente. Desligar o Witness Ear pausa o registro, e as entradas guardadas continuam a expirar. O controle de lixeira no app apaga o diário na hora. Veja o guia do Witness Ear para os detalhes.

A escuta, a direção e as legendas são feitas para funcionar no telefone, para a pessoa que o segura.

## Rede e serviços de terceiros

Quando você usa certos recursos, ou quando o app precisa deles para funcionar, **dados limitados podem sair do seu dispositivo** e ser tratados por serviços de terceiros, de acordo com as políticas de privacidade deles:

*   **Exibição do mapa**
    *   *O que é enviado:* Pedidos de blocos do mapa, inclusive a parte do mapa na tela e a localização aproximada necessária para desenhá-lo
    *   *Provedor:* Apple Maps / MapKit no iPhone e no iPad; Google Maps no Android
*   **Alertas de clima severo (pelo nosso próprio serviço de alertas)**
    *   *Por que existe:* Os avisos oficiais vêm de agências meteorológicas nacionais. Cada telefone entrava em contato com essas agências diretamente, de modo que uma agência podia ver o endereço de rede do telefone e com que frequência ele consultava. Essas fontes públicas limitam quantos pedidos vão atender, e começaram a deixar alertas de fora conforme mais pessoas usavam o app. Nossa retransmissão agora coleta os avisos oficiais aproximadamente a cada **5 minutos** e envia a cópia guardada quando o seu telefone pede. São os mesmos avisos oficiais. **O seu telefone não entra em contato com um servidor do governo para obtê-los.**
    *   *O que é enviado:* O pedido leva o idioma do app, um número de versão da resposta, um raio de 150 km e uma localização que o telefone já arredondou para cerca de **50 km (meio grau)**. Essa área aproximada é usada somente para limitar a resposta aos avisos perto de você. O teste preciso de "estou dentro deste aviso?" acontece **no seu telefone**. O pedido não inclui nome, conta nem identificador de dispositivo.
    *   *O que guardamos:* Nosso serviço guarda um registro de 30 dias desses pedidos: a hora, qual fonte respondeu e o país ou o lugar de que o pedido tratava. O registro salvo não guarda o endereço de rede, o identificador do dispositivo nem o próprio quadrado de localização. Ele existe para podermos operar o serviço. Quando o seu telefone mostra um aviso, ele também informa quantos mostrou para cada fonte e cada nível de aviso (por exemplo, "dois avisos laranja do serviço meteorológico do Japão"), para podermos saber se uma fonte está chegando a alguém. Essa contagem não leva identificador de aviso, nem localização, nem identificador de dispositivo. O seu telefone guarda a lista dos avisos que já contou. Também existem registros comuns de hospedagem, de curta duração, como em qualquer serviço web criptografado. Não usamos esses registros para montar um perfil seu, e não os vendemos.
    *   *Provedor:* Dados oficiais de serviços governamentais de clima e de avisos em mais de 140 países e territórios, entregues por infraestrutura que operamos: a retransmissão da Wingdings, Inc.
*   **Alertas de terremoto (pelo nosso próprio serviço de alertas)**
    *   *O que é enviado:* Um pedido de uma lista pública mundial de terremotos, pela mesma retransmissão dos alertas de clima acima, para o seu telefone também não entrar em contato com um servidor do governo por causa deles. O pedido não leva localização nem região. O seu telefone decide sozinho se um tremor informado está perto de você.
    *   *Provedor:* Fontes públicas oficiais de terremotos, retransmitidas pela Wingdings, Inc.
*   **Radar meteorológico**
    *   *O que é enviado:* Quando o radar está ligado, um pedido da lista de imagens de radar e, em seguida, os blocos de imagem da parte do mapa na tela. Cada pedido de bloco indica um nível de zoom, um quadrado do mapa e a hora daquela imagem. No zoom mais próximo, o quadrado tem cerca de 40 km de lado. Em alguns países, a imagem mais próxima é mais grosseira, então o quadrado é maior. Nada mais é incluído: nenhum identificador, nenhuma conta e nenhum dado de detecção.
    *   *Fonte:* Imagens de radar e de satélite de serviços meteorológicos nacionais (cada um listado com a sua licença em [vigilantear.com/en/sources](https://vigilantear.com/en/sources)), entregues pela nossa retransmissão da Wingdings, para o seu telefone não entrar em contato direto com essas agências.
    *   *Provedor:* Wingdings, Inc.
*   **Lista de ajuda (a boia salva-vidas no mapa)**
    *   *O que é enviado:* Quando você a abre, um código de país de duas letras (a partir da sua localização, se o app a tiver; caso contrário, a configuração de região do seu telefone) e o idioma do app, para a lista poder mostrar o número de emergência e as organizações relevantes.
    *   *Provedor:* Wingdings, Inc.
*   **Download do Suporte a legendas (iPhones com pelo menos 8 GB de memória)**
    *   *O que é enviado:* Pedidos web comuns para um download único de modelos de reconhecimento de fala (cerca de 1 GB) e para a lista desses arquivos. Nada sobre você, a sua localização ou o seu áudio é incluído. Depois de baixados, os modelos funcionam no dispositivo, como o restante das legendas.
    *   *Provedor:* Wingdings, Inc. via Cloudflare
*   **Identificação de música (opcional, Power Pack+)**
    *   *O que é enviado:* Uma impressão digital curta do áudio, nunca a gravação em si, quando música é detectada e o Shazam está ligado. Você pode desligar isso nas configurações.
    *   *Provedor:* Apple Shazam / ShazamKit
*   **Contexto de ruas**
    *   *O que é enviado:* Uma posição que o telefone arredondou para cerca de **110 metros**, dentro de um pedido das ruas em um raio de **500 metros** desse ponto, para um veículo detectado poder ser colocado na rua em que realmente está. O pedido não inclui nome, conta nem identificador de dispositivo, e nada sobre o que o telefone ouviu.
    *   *Provedor:* Colaboradores do OpenStreetMap, pela API pública Overpass
*   **Rotas de carro**
    *   *O que é enviado:* A sua posição e a posição de um som rastreado, para uma rota de carro entre elas poder ser desenhada no mapa. Essas posições são enviadas na precisão que o telefone tem, que é mais fina do que a do pedido de contexto de ruas acima. Nenhum nome ou conta vai junto, e nada sobre a própria detecção é incluído.
    *   *Provedor:* Apple Maps / MapKit no iPhone e no iPad
*   **Compras e direitos**
    *   *O que é enviado:* Tokens de compra e o status de direito ou de teste do desbloqueio opcional e único do Power Pack+ (não é uma assinatura)
    *   *Provedor:* a Apple App Store no iPhone e no iPad; Google Play Billing no Android
*   **Malha do Constellation (opcional, Power Pack+)**
    *   *O que é enviado:* Quando você liga o Constellation, os telefones que você vincula trocam o que precisam para uma imagem compartilhada. Isso inclui como os telefones estão apontados uns em relação aos outros, a distância por banda ultralarga quando os telefones suportam, os rumos, os rótulos de som, onde cada som foi colocado no mapa, o texto das legendas ao vivo, o nome de exibição definido em cada telefone e uma assinatura de cada voz, para a mesma pessoa manter o mesmo número e a mesma cor em todos os telefones vinculados. Essas assinaturas de voz ficam apenas na memória de trabalho dos telefones. Elas não são salvas e não são enviadas a lugar nenhum, exceto aos telefones que você vinculou.
    *   *Quem pode entrar:* Somente telefones que rodam o Vigilant Ear e que você vincula para o Constellation. Um telefone sem o app não pode entrar nem receber essas informações. A Wingdings não opera uma retransmissão na nuvem para isso.
    *   *Como é protegido:* Cada vínculo combina uma chave de criptografia nova que existe somente na memória dos dois telefones (X25519). Cada mensagem é criptografada com essa chave (ChaCha20-Poly1305). A chave é descartada quando a conexão termina.
    *   *Provedor:* Os frameworks Network e Nearby Interaction da Apple, entre os seus dispositivos com o Vigilant Ear. **O Constellation é um recurso de iPhone e de iPad. O app de Android não o inclui.**
*   **Remote Link (opcional. Iniciar um vínculo exige o Power Pack+; entrar é grátis)**
    *   *Por que existe:* Uma pessoa surda ou com deficiência auditiva não consegue usar uma chamada de voz. O Remote Link é uma conversa de vídeo privada com legendas. Duas pessoas se veem, leem as legendas e o texto digitado uma da outra e podem sinalizar no vídeo.
    *   *O que é enviado:* **Nenhum áudio, em momento nenhum.** Uma sessão de Remote Link não tem faixa de áudio. Quando a rede permite, o vídeo ao vivo, o texto das legendas e tudo o que você digita viajam **direto entre os dois telefones**, criptografados de ponta a ponta, para que nada no meio possa ver ou ler a chamada. Para preparar o vínculo, nosso serviço guarda o código de convite e os detalhes de conexão de que os telefones precisam para se encontrar. Essa caixa de correio **não guarda vídeo nem texto**. Ela expira depois de cerca de cinco minutos. Quando os telefones estão conectados, a chamada deixa de depender dela. Para limitar abusos, o serviço guarda por até uma hora o endereço de rede do telefone que cria um código, e conta quantos vínculos são iniciados e quantos entram. A contagem não leva endereço, nem código, nem identificador de dispositivo.
    *   *Legendas:* Cada telefone legenda a fala que ouve e envia esse texto ao outro telefone, no idioma em que ela foi ouvida. O telefone que recebe traduz o texto, no próprio dispositivo, para o idioma de quem lê. Isso usa a mesma conexão criptografada do vídeo e não passa pelos nossos servidores. **Pausar** interrompe o envio de vídeo e de legendas juntos. As legendas também param quando você para de escutar.
    *   *Se os telefones não conseguem se conectar diretamente:* Quando estão longe, em redes diferentes ou atrás de um roteador que não permite uma conexão direta, o vídeo, as legendas e o texto criptografados são encaminhados por uma retransmissão que **não consegue lê-los**. A retransmissão pode ver que existe uma conexão, os endereços de rede envolvidos e quantos dados passam, como qualquer retransmissão precisa ver, e nada mais. O app mostra se um vínculo é **Direct** ou **Relayed**. Um vínculo Relayed se encerra sozinho depois de uma hora. Um vínculo Direct não tem esse limite.
    *   *Nada é gravado:* Nenhum vídeo, áudio ou texto de um Remote Link é gravado no armazenamento de nenhum dos telefones, nem guardado em servidor nenhum.
    *   *Provedor:* Wingdings, Inc. (a caixa de correio do convite) e Cloudflare (a retransmissão, usada somente quando uma conexão direta não é possível)
*   **Documentos jurídicos no app**
    *   *O que é enviado:* Pedidos web comuns quando você abre no app as páginas da Política de Privacidade, dos Termos, do Suporte ou do README do produto
    *   *Provedor:* Wingdings, Inc.
*   **Mapa ao vivo do Research Array (somente visualização)**
    *   *O que é enviado:* Pedidos web comuns quando você toca em **Mapa** para abrir o painel público do array no navegador, do mesmo modo que visitar qualquer site. Visualizar não envia nada do seu diário nem das suas detecções.
    *   *Provedor:* Wingdings, Inc.
*   **Research Array (ligado até você desligar)**
    *   *O que é enviado:* Um relatório pequeno, somente de metadados, quando o telefone registra um evento que se qualifica: a hora, uma localização aproximada, dados básicos sobre o sinal e a versão do app. Veja **Research Array** abaixo.
    *   *Provedor:* Wingdings, Inc.

Usamos esses serviços para mapas, clima, títulos de música, compras, telefones vinculados e relatórios do Research Array enquanto esse recurso está ligado. **A Wingdings não recebe o áudio do seu microfone, um histórico contínuo de localização nem os seus contatos desses provedores.**

## O que coletamos (e o que não coletamos)

### Sem relatórios remotos de falha nem rastreamento de uso

A escuta principal e as legendas funcionam no seu dispositivo. **Não** coletamos relatórios remotos de falha, dados de publicidade nem estatísticas gerais de uso.

O app pode guardar registros de depuração **locais** no dispositivo para resolver problemas. O app não os envia. O texto da legenda é removido de um registro antes que ele possa ser exportado. Você pode escolher nos enviar um registro por e-mail.

**Research Array e os nossos próprios serviços.** Enquanto o Research Array está ligado, a Wingdings recebe os relatórios limitados de eventos descritos abaixo. Separadamente, alguns recursos falam com servidores que operamos: alertas de clima e de terremoto, radar meteorológico, a lista de ajuda, o download do Suporte a legendas e a preparação de um Remote Link. Esses pedidos não levam conta nem identificador pessoal. O pedido de clima inclui, no máximo, uma localização arredondada para cerca de 50 km. Nada disso é publicidade. Cada pedido existe para fazer um recurso funcionar.

## Research Array (ligado até você desligar)

O Vigilant Ear pode contribuir com relatórios **somente de metadados** para uma rede de pesquisa, para ajudar a formar uma imagem compartilhada de terremotos e de outros sons muito graves, inclusive roncos abaixo da faixa da audição.

**O interruptor fica ligado até você desligar.** Na primeira vez que você usa uma versão que inclui isso, se você nunca definiu o interruptor por conta própria, o app o liga e pergunta no mapa: "Quer participar anonimamente do nosso serviço de pesquisa de terremotos?" Nada é enviado até essa pergunta ter aparecido. Depois que ela aparece, relatórios podem ser enviados enquanto o interruptor continua ligado, inclusive enquanto você ainda está decidindo. Toque em **Tô dentro!** para continuar contribuindo. **Não** espera alguns segundos e depois desliga o interruptor. Toque nele de novo durante essa espera para cancelar. Você também pode desligá-lo em Preferences a qualquer momento. Abrir a página pública **Mapa** é separado de contribuir, e essa visita não compartilha nada do seu telefone.

Enquanto o interruptor está ligado, e somente quando o telefone registra um evento **que se qualifica**, o app pode enviar um relatório pequeno. Um evento que se qualifica é um ronco forte o bastante que não parece vir do cômodo ao seu redor, um possível sinal sísmico ou um registro de que o telefone mostrou uma confirmação oficial de terremoto. O relatório contém:

- a hora do evento, pelo relógio do telefone, em tempo universal
- uma localização aproximada, arredondada para cerca de **1 quilômetro**, que não é um endereço de rua nem um trajeto contínuo
- alguns dados sobre o sinal: se o telefone ouviu no ar ou sentiu como movimento, a frequência principal quando há uma e o quão abrupto foi o início
- o tipo de relatório (um início de baixa frequência, um candidato sísmico ou uma confirmação oficial de tremor)
- a versão do app

**O que um relatório do Research Array nunca inclui:** áudio, formas de onda, gravações, transcrições, legendas, contatos, qualquer identificador que o app crie para você ou para esta instalação, a sua posição precisa de GPS (mais fina do que o arredondamento acima) ou um registro contínuo de por onde você vai. Nenhum recurso envia uma gravação. A identificação de música, quando você deixa o Shazam ligado, envia uma impressão digital do som, e não o som em si.

### Para onde os relatórios vão

Os relatórios são enviados por uma conexão **criptografada (HTTPS)** ao serviço de pesquisa da Wingdings que operamos. O relatório **não inclui um ID de pesquisa por pessoa ou por dispositivo** e **não inclui um identificador de conta da Apple ou do Google**. Um segredo compartilhado do app pode ser usado para que somente o nosso app possa enviar relatórios. Esse segredo não identifica você. Podem existir registros comuns de hospedagem, como registros de rede de curta duração necessários para operar o serviço. Eles não são um recurso do produto para rastrear você, e não os vendemos.

Desligar o **Research Array** interrompe **todos os relatórios futuros** na hora. Isso **não** apaga relatórios já enviados. Como um relatório **não leva identificador por pessoa ou por dispositivo**, não conseguimos buscar "tudo o que você contribuiu" e apagar depois. Não temos um modo confiável de saber quais relatórios passados vieram de você. Isso é de propósito. Impede que o fluxo de pesquisa vire um histórico pessoal que pudéssemos reconstruir.

## O que evitamos

Nós **não** fazemos o seguinte:

- vender ou alugar as suas informações pessoais
- gravar ou armazenar áudio do microfone nos nossos servidores
- operar redes de anúncios, rastreadores entre apps ou ferramentas que montam um perfil de como você usa outros apps
- enviar à Wingdings um rastro contínuo da sua localização
- enviar áudio bruto do microfone para reconhecimento de fala ou de som na nuvem
- exigir o Research Array para o restante do app funcionar. Desligá-lo deixa todos os outros recursos disponíveis.

As informações que o app guarda no telefone, como o diário de sons e a lista do Name Called, estão descritas acima. Não é uma cópia que nós guardamos.

## Suas escolhas e controles

Você pode:

- **Revogar permissões do sistema** do microfone, da localização, da câmera, das notificações e do reconhecimento de fala. No iPhone ou no iPad, abra Settings → Apps → Vigilant Ear. Você também pode mudar essas permissões em Settings → Privacy & Security. No Android, abra Settings → Apps → Vigilant Ear → Permissions.
- **Desligar o Shazam** na identificação de música, em Power Pack+ / Preferences
- **Desligar categorias individuais de alerta** (sirenes, clima, campainhas, bebê e as outras)
- **Deixar o microfone dormir em segundo plano** ao desligar os alertas de som: sirenes, alarmes, batidas e campainhas, bebê e pessoas por perto. Os alertas de clima e de terremoto não mantêm o microfone ligado.
- **Deixar o Constellation desligado,** para que nenhuma informação da malha seja compartilhada com outros telefones que rodam o Vigilant Ear. Um telefone sem o app não pode receber essas informações.
- **Desligar o Research Array** a qualquer momento em Preferences. Ele fica ligado até você desligar. A pergunta no mapa controla o mesmo interruptor.

## Diretrizes das plataformas

O Vigilant Ear segue os requisitos de privacidade da Apple App Store e do Google Play, e as diretrizes de cada fornecedor para apps que atendem pessoas com necessidades de acessibilidade. Atualizamos esta política quando as nossas práticas mudam, ou quando as regras de uma plataforma mudam.

## Alterações desta política

Podemos atualizar esta Política de Privacidade de tempos em tempos. Uma mudança relevante é indicada pela atualização da **Data de vigência** no topo desta página.

## Fale conosco

Se você tiver dúvidas sobre esta Política de Privacidade, fale conosco em:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ O Vigilant Ear é feito com amor e respeito pela comunidade surda, com deficiência auditiva e CODA. A sua confiança importa para nós.

*O Vigilant Ear é uma ferramenta de acessibilidade feita com cuidado. Por favor, use com responsabilidade.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Todos os direitos reservados.<br />
  Patent Pending
</p>
