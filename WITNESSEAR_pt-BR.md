# Witness Ear — Diário de Sons Opcional de 24 Horas e Relatório em PDF

O **Witness Ear** é um recurso opcional do **Vigilant Ear**. Ele mantém um registro curto, no dispositivo, dos sons que o aplicativo classificou ao seu redor, para que você possa exportar um **relatório-resumo em PDF** simples quando precisar de um registro escrito — não apenas de um mapa ao vivo.

Ele vem **desligado por padrão**, é **gratuito** e foi projetado para ficar fora do caminho até que você precise dele.

---

## O que é

Enquanto o Vigilant Ear está monitorando, ele já classifica sons ambientais (sirenes, alarmes, veículos, categorias próximas à fala e muito mais). O Witness Ear faz uma coisa a mais quando você o ativa:

- Ele **armazena as classificações recentes** neste telefone por até **24 horas**.
- Você pode **exportar** esses eventos como um **Relatório-Resumo em PDF** (compartilhar via Mail, Arquivos, AirDrop, etc.).
- Você pode **excluir** o registro a qualquer momento com o controle de lixeira. Desligar o Witness Ear apenas **pausa** o registro — o que já foi gravado é mantido (e ainda expira após 24 horas), então você pode suspendê-lo por um tempo sem perder o dia.

**Não há um "modo de aplicativo" Witness Ear separado** nem um painel completo por enquanto. O controle fica em **Preferências → SOUND JOURNAL** (diário de sons): um interruptor **Witness Ear** (com um pequeno controle de **lixeira** ao lado enquanto o registro contém eventos), além de uma linha **PDF Summary Report** (relatório-resumo em PDF) com **Export** (exportar).

O relatório lista itens como **hora**, **confiança**, **nível de pico (dBFS)**, **direção quando medida**, **qual telefone ouviu** (este dispositivo ou um par vinculado via Constellation) e o **rótulo do som** agrupado por família de sons. É um **auxílio de padrões e conscientização**, não um medidor de ruído certificado.

---

## Por que você pode precisar dele

As pessoas usam um registro escrito curto quando a memória e os pontos ao vivo não são suficientes:

| Situação | Como o Witness Ear ajuda |
|-----------|------------------------|
| **Conversa com vizinho / condomínio / locador** | Uma lista datada do *que o aplicativo rotulou e quando*, ao longo de uma noite ou de um dia, como ponto de partida para conversa — não como metrologia de nível judicial. |
| **"Foi toda noite ou só uma vez?"** | 24 horas contínuas para você verificar a recência sem manter um arquivo permanente. |
| **Casa com vários telefones (Constellation)** | Telefones vinculados compartilham o que ouvem pela sua **malha local**. Detecções compartilhadas também podem entrar no diário, para que o relatório possa mostrar **qual telefone** ouviu um evento — não só este microfone. |
| **Registro de acessibilidade / conscientização** | Uma exportação simples que você pode enviar a um familiar ou contato de apoio depois de um período barulhento. |
| **Suas próprias anotações** | Exporte, anote offline, descarte o registro quando terminar. |

Se você nunca precisar de um PDF, deixe o Witness Ear **desligado**. A detecção e os alertas continuam funcionando exatamente como antes.

---

## Como usar (iPhone / iPad)

### 1. Ative-o

1. Abra as **Preferências** (caminho do sino / Personalizações a partir do leque de ações ou do menu).
2. Encontre a seção **SOUND JOURNAL** (diário de sons).
3. Ligue o **Witness Ear**.  
   - Toque no **ⓘ** ao lado do nome para a breve explicação dentro do aplicativo.
4. Deixe o Vigilant Ear monitorando normalmente (microfone ativo para os sons que interessam a você).

Enquanto ele está ligado, as classificações que atingem o piso de confiança do aplicativo são anexadas a um registro **local** (com um pequeno intervalo por rótulo para que o arquivo não seja inundado com duplicatas).

### 2. Exporte um PDF

1. Permaneça em **SOUND JOURNAL**.
2. Na linha **PDF Summary Report**, toque em **Export** (exportar).  
   - Toque no **ⓘ** dessa linha para saber o que o PDF contém.
3. Aguarde a **planilha de compartilhamento** do sistema e então salve ou envie o arquivo (`WitnessEar-Report-….pdf`).

Se o registro estiver vazio, a exportação dirá que não há eventos nas últimas 24 horas — ligue o Witness Ear e aguarde até que o classificador tenha disparado pelo menos uma vez.

### 3. Pause ou exclua o registro

- **Pausar:** desligue o interruptor **Witness Ear**. O registro para; o que já foi gravado é **mantido** e ainda expira após 24 horas. Ligue novamente para retomar.
- **Excluir:** toque na pequena **lixeira vermelha** na linha do **Witness Ear** (ela só aparece enquanto o registro contém eventos). Isso arma uma breve contagem regressiva **Cancelar (5)…(1)** — toque novamente para cancelar, ou espere-a terminar para excluir tudo imediatamente.

### 4. Constellation (opcional)

Se o **Constellation** estiver vinculado a outros telefones na sua malha:

- Os telefones já **compartilham muitas detecções que não são de fala** para o mapa ao vivo e a imagem de vários telefones.
- Com o Witness Ear **ligado**, as detecções **compartilhadas por pares** podem ser **mescladas ao diário deste telefone** e aparecer no PDF em **Heard by** (ouvido por: nome do par) vs **this phone** (este telefone).

Cada telefone continua mantendo o **seu próprio** arquivo de diário no dispositivo. **Não há arquivo Witness Ear na nuvem.** Para o PDF multi-telefone mais completo em um dispositivo, esse dispositivo precisa ter estado vinculado e registrando enquanto os outros estavam compartilhando.

---

## O que o PDF contém (formato de exemplo)

O layout exato pode evoluir; a intenção é ser legível em papel e no Mail. (O relatório em si é gerado em inglês; o exemplo abaixo é mostrado verbatim.)

```
WITNESS EAR — 24-Hour Sound Journal
Generated Aug 7, 09:30  ·  Window Aug 6, 10:00 – Aug 7, 09:30
Sources: this phone + Constellation peers.  Repeats within 30 s are logged once.

[summary tiles]  classifier samples · episodes (60 s gap) · sound groups · span covered
[Activity by hour]      bar chart of samples per hour
[Sound groups]          raw labels coalesced by profile family (Music, Vehicles, …)
[Locations]             L1, L2, … — positions grouped within ~110 m, with accuracy notes
[Devices]               P1 (this phone, model · iOS · app build), P2 … (linked peers + model)

Episodes
#   Start         Length   Samples   Peak     Sounds              By
1   Aug 7, 01:44  10m 40s  17        −12 dB   Music, Animals +4   P1, P2

Episode Source Feeds (oldest first)
Time        Conf   dBFS   Dir    By   Sound
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Method & Limits …

Integrity
SHA-256 of the N journal rows exported in this window (JSON, sorted keys):
a1b2c3… (full hex digest)
Location accuracy / simulated-GPS flags / device-state notes / exporting device / time base…

Attestation
I, _______________, attest that … Signature / Date lines for ink after print.
```

Toda página traz uma marca d'água discreta da Wingdings atrás do conteúdo e um rodapé com a marca Wingdings, "© 2026 Wingdings, Inc. All rights reserved. · Patent Pending" e o número da página — uma primeira verificação fácil de que um PDF que alguém lhe entrega parece uma exportação genuína.

**Como interpretá-lo**

- **Classifier samples** (amostras do classificador) — número de janelas armazenadas (não "número de sirenes na cidade").
- **Distinct episodes** (episódios distintos) — sequências de amostras separadas por cerca de um minuto de silêncio; um som longo e contínuo pode ser muitas amostras, mas poucos episódios.
- **Conf** — confiança do modelo (0–100%), **não** decibéis SPL.
- **dBFS** — nível de pico do microfone perto do evento, relativo à escala digital máxima daquele telefone (0 = o mais alto que o microfone consegue gravar). Bom para comparar momentos; **não** é dB SPL calibrado.
- **Dir** — o azimute absoluto de bússola do som (0° = norte), mostrado **apenas** quando uma resolução com dois microfones realmente o mediu; "—" significa não medido. Nunca é inferido da direção em que o telefone estava apontado.
- **By** — identificador do dispositivo da seção **Devices** (P1 = o telefone que exporta, P2… = pares vinculados), correspondendo aos identificadores L em **Locations**.
- **Integrity hash** (hash de integridade) — impressão digital do diário no dispositivo usado para construir o PDF; ajuda a detectar edições da tabela de eventos após a exportação.
- **Attestation** (atestado) — bloco opcional de assinatura humana após a impressão (você atesta posse/localização).

---

## Privacidade dos dados

| Tópico | Política |
|-------|--------|
| **Padrão** | **Desligado.** Nenhum registro do Witness Ear até que você opte por ativá-lo. |
| **Onde os dados ficam** | Apenas **neste dispositivo**, na sandbox privada **Application Support** do aplicativo (veja abaixo). |
| **O que é armazenado** | Metadados de classificação: hora, rótulo, confiança, localização/direção opcionais se o aplicativo já os tiver, ID opcional do par quando um evento da malha é mesclado. **Não** é uma gravação de áudio contínua do dia para o diário. |
| **Retenção** | **24 horas contínuas.** Linhas mais antigas são removidas. |
| **Quando você o desliga** | O registro **pausa**; as entradas armazenadas são mantidas e ainda expiram após 24 horas. |
| **Controle de exclusão** | Lixeira na linha do Witness Ear (exibida enquanto o registro contém eventos), com contagem regressiva cancelável. |
| **Upload** | O Witness Ear **não** envia o diário para a Wingdings nem para uma nuvem do Witness Ear. |
| **Exportação** | **Você** escolhe compartilhar o PDF (Mail, Arquivos, AirDrop, etc.). Depois de compartilhada, essa cópia está fora do controle do aplicativo. |
| **Constellation** | O compartilhamento em malha de detecções ao vivo é um recurso de produto de **rede local** entre os seus telefones vinculados. As linhas de diário mescladas ainda permanecem no telefone que as recebeu até que você exporte ou limpe. |
| **Crianças / uso sensível** | Não use o registro para identificar ou rastrear pessoas. Ele serve para **lugares, horários e categorias de som**, não para dossiês pessoais. |

### O que significa "Application Support"

**Application Support** é uma pasta privada que pertence apenas ao Vigilant Ear neste telefone. **Não** é uma unidade na nuvem, **não** é um álbum público do app "Arquivos" e **não** é um e-mail para o suporte. Outros aplicativos não podem lê-la sob as regras normais do iOS.

Em um iPhone com **código de acesso do dispositivo** (ou biometria), o iOS **criptografa os dados do aplicativo em repouso** usando proteção com suporte de hardware. O Witness Ear **não** faz upload do diário e **não** adiciona uma segunda camada de criptografia gerenciada pelo aplicativo por cima disso. Quando o dispositivo está bloqueado, o acesso segue as classes padrão de proteção de dados da Apple (normalmente protegido até o primeiro desbloqueio após a inicialização, a menos que configurações mais rígidas se apliquem). Backups (regras de backup criptografado no computador / backup do iCloud) são algo separado de "estar no disco do telefone".

---

## Usando este relatório em disputas

O Witness Ear pode produzir um **livro-razão digital autenticado de metadados acústicos** (o que os classificadores no dispositivo rotularam, quando e qual telefone contribuiu) — útil para conversas **informais** com vizinhos, locadores, condomínios ou mediadores. Ele **não** substitui um levantamento certificado Classe 1/2 nem aconselhamento jurídico.

**Passos práticos:**

1. Deixe o **Witness Ear ligado** durante o período que interessa a você (até 24 horas retidas).
2. **Exporte** o PDF; mantenha o arquivo original sem salvá-lo novamente por meio de um editor que reescreve PDFs.
3. **Imprima** uma cópia se um rastro em papel ajudar; complete o bloco de **Atestado** (nome, local, assinatura, data) à caneta.
4. Aponte os destinatários para a seção **Integrity** (integridade): a impressão digital **SHA-256** das linhas do diário. Uma nova exportação posterior a partir do **mesmo registro inalterado no dispositivo** deve coincidir; editar a tabela de eventos em um editor de PDF não atualizará esse hash corretamente, a menos que o invasor também o reconstrua a partir de dados de origem correspondentes.
5. Seja explícito: trata-se de **metadados gerados pelo aplicativo**, a hora é o **relógio do dispositivo**, os níveis **não são SPL legal** e os rótulos podem estar errados.
6. Nós **não** operamos atualmente um site público de "envie o PDF para verificar a assinatura". O hash é uma **nota de integridade autocontida**, não um atestado em nuvem da Wingdings.

**Não** invente eventos, não recorte o bloco de integridade nem afirme que o PDF é uma medição de ruído certificada.

---

## Isenções de responsabilidade (leia, por favor)

1. **Não é um instrumento certificado.** Microfones de telefone **não** são medidores de nível sonoro Classe 1/2. As pontuações de confiança e quaisquer níveis relacionados são **relativos**, não calibrados, e **não devem** ser apresentados como dBA/dBC absolutos para fiscalização, multas ou metrologia legal. Ainda assim, o relatório pode ser útil como um **livro-razão digital autenticado de metadados acústicos** quando usado honestamente.

2. **Não é uma garantia de completude.** O registro inclui apenas o que os **classificadores no dispositivo** rotularam enquanto o monitoramento estava ativo e o Witness Ear estava **ligado**. Períodos de silêncio, microfone silenciado, aplicativo fechado, baixa confiança ou duplicatas limitadas podem deixar lacunas. A ausência de uma linha **não** é prova de que um som nunca aconteceu.

3. **Os rótulos podem estar errados.** O aprendizado de máquina classifica errado. Uma linha "Siren" (sirene) significa o palpite principal do modelo naquele momento — não um veículo de emergência garantido. Trate o PDF como **notas de apoio**, não como verdade absoluta.

4. **Não é um dispositivo de segurança.** O Vigilant Ear / Witness Ear são **auxílios de conscientização e acessibilidade**. Eles não substituem o julgamento humano, alarmes certificados nem os serviços oficiais de emergência.

5. **Evidências e disputas.** Se você compartilhar um PDF com um locador, condomínio ou órgão público, seja honesto sobre o que ele é: um **registro de classificação gerado por aplicativo**, com retenção limitada, exportado pelo usuário, com um hash de integridade no dispositivo. Não altere a tabela de eventos nem invente eventos. Nós não oferecemos aconselhamento jurídico; as regras locais sobre gravações e provas variam — em caso de dúvida, consulte um profissional qualificado.

6. **Relatórios de vários telefones.** As linhas de pares dependem da conectividade do Constellation e das regras de compartilhamento (por exemplo, fontes que não são de fala). Relógios e GPS de telefones de consumo têm erro; a concordância de vários telefones na "mesma noite" é contexto útil, não cronometragem de laboratório.

7. **Base de tempo.** Os carimbos de data/hora usam o **relógio do dispositivo**, que o usuário pode alterar. O PDF observa isso; ele não é verificado automaticamente contra a hora da rede no produto atual.

8. **Sua responsabilidade ao compartilhar.** Depois que você envia um relatório por AirDrop ou e-mail, os destinatários podem manter cópias. Exporte apenas o que você pretende compartilhar.

---

## Notas de plataforma

- **iOS / iPadOS:** os controles do Witness Ear ficam em **Preferências → SOUND JOURNAL**, como descrito acima.
- **Android:** uma superfície "Witness Ear" mais completa (incluindo gráficos de PDF mais ricos em desenvolvimento) pode aparecer mais tarde; a embalagem do produto pode variar por plataforma. A ideia central permanece: **opcional (opt-in), retenção curta, no dispositivo, exportação iniciada pelo usuário.**

---

## Bom saber

- Deixar o Witness Ear **desligado** não custa essencialmente nada além do monitoramento normal.
- Ligá-lo adiciona armazenamento local leve e gravações ocasionais — não uma segunda interface completa.
- **Export** constrói o PDF sem exigir uma tela separada do Witness Ear.
- Para alertas e direção no dia a dia, use o mapa principal e os HUDs do Vigilant Ear; use o Witness Ear quando precisar de um **retrato escrito portátil** do último dia.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Todos os direitos reservados.<br />
  Patente Pendente
</p>
