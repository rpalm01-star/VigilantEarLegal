# Witness Ear — Diário sonoro opcional de 24 horas e relatório em PDF

**Witness Ear** é um recurso opcional do **Vigilant Ear**. Ele mantém um registro curto, no dispositivo, dos sons que o app classificou ao seu redor, para que você possa exportar um **relatório resumido em PDF** simples quando precisar de um registro escrito—não só de um mapa ao vivo.  Ele registra **eventos** sonoros, não áudio nem conversas.

Ele fica **desligado por padrão**, é **gratuito** e foi pensado para não atrapalhar até você precisar dele.

---

## O que é

Enquanto o Vigilant Ear está monitorando, ele já classifica sons do ambiente (sirenes, alarmes, veículos, categorias próximas da fala e outros). O Witness Ear faz uma coisa a mais quando você o ativa:

- Ele **armazena classificações recentes** no seu telefone por até **24 horas**.
- Você pode **exportar** esses eventos como um **PDF Summary Report** para compartilhar via Mail, Files, AirDrop, etc.
- Você pode **excluir** o registro a qualquer momento com o controle de lixeira. Desligar o Witness Ear apenas **pausa** o registro — o que já foi gravado é **mantido** (e ainda expira após 24 horas), para que você possa suspendê-lo por um tempo sem perder o dia.

Não há um **“modo de app” separado do Witness Ear** nem uma tela própria. O controle fica em **Preferences → SOUND JOURNAL**: um interruptor **Witness Ear** (com um pequeno controle de **lixeira** ao lado enquanto o registro tiver eventos), mais uma linha **PDF Summary Report** com **Export**.

O relatório lista coisas como **horário**, **confiança**, **nível de pico (dBFS)**, **direção quando medida**, **qual telefone ouviu** (este dispositivo ou um par Constellation vinculado) e o **rótulo do som** agrupado por família sonora. É um **auxiliar de padrão e consciência**, não um medidor de ruído certificado.

---

## Por que você pode precisar

As pessoas usam um registro escrito curto quando a memória e os pontos ao vivo não bastam:

| Situação | Como o Witness Ear ajuda |
|----------|--------------------------|
| **Discussão com vizinho / HOA / proprietário** | Uma lista datada do *que o app rotulou e quando*, ao longo de uma noite ou um dia, como ponto de partida de conversa—não como metrologia de nível judicial. |
| **“Foi todas as noites ou só uma vez?”** | Janela rolante de 24 horas para você checar a recência sem manter um arquivo permanente. |
| **Casa com vários telefones (Constellation)** | Telefones vinculados compartilham o que ouvem pela **malha local**. Detecções compartilhadas também podem entrar no diário, para o relatório mostrar **qual telefone** ouviu um evento—não só este microfone. |
| **Acessibilidade / diário de consciência** | Uma exportação simples que você pode enviar a um familiar ou contato de apoio após um período ruidoso. |

Se você nunca precisar de um PDF, deixe o Witness Ear **desligado**. Detecção e alertas continuam funcionando exatamente como antes.

---

## Como usar (iPhone / iPad)

### 1. Ativar

1. Abra **Preferences** (caminho do sino / Customizations no leque de ações ou no menu).
2. Encontre a seção **SOUND JOURNAL**.
3. Ligue o **Witness Ear**.  
   - Toque no **ⓘ** ao lado do nome para a explicação curta no app.
4. Deixe o Vigilant Ear monitorando como de costume (microfone ativo para os sons que importam).

Enquanto estiver ligado, classificações que atingem o piso de confiança do app são anexadas a um registro **local** (com um pequeno intervalo por rótulo para o arquivo não encher de duplicatas).

### 2. Exportar um PDF

1. Fique em **SOUND JOURNAL**.
2. Na linha **PDF Summary Report**, toque em **Export**.  
   - Toque no **ⓘ** dessa linha para ver o que o PDF contém.
3. Aguarde a **folha de compartilhamento** do sistema e salve ou envie o arquivo (`WitnessEar-Report-….pdf`).

Se o registro estiver vazio, Export dirá que não há eventos nas últimas 24 horas—ligue o Witness Ear e espere até o classificador disparar pelo menos uma vez.

### 3. Pausar ou excluir o registro

- **Pausar:** desligue o interruptor **Witness Ear**. O registro para; o que já foi gravado é **mantido** e ainda expira após 24 horas. Ligue de novo para retomar.
- **Excluir:** toque na pequena **lixeira vermelha** na linha **Witness Ear** (só aparece enquanto o registro tiver eventos). Ela arma uma contagem regressiva curta **Cancel (5)…(1)** — toque de novo para cancelar, ou espere terminar para excluir tudo imediatamente.

### 4. Constellation (opcional)

Se o **Constellation** estiver vinculado a outros telefones na sua malha:

- Os telefones já **compartilham muitas detecções não-fala** para o mapa ao vivo e a visão multi-telefone.
- Com o Witness Ear **ligado**, detecções **compartilhadas por pares** podem ser **mescladas no diário deste telefone** e aparecer no PDF em **Heard by** (nome do par) vs **this phone**.

Cada telefone ainda mantém **seu próprio** arquivo de diário no dispositivo. **Não há arquivo em nuvem do Witness Ear**. Para o PDF multi-telefone mais completo em um dispositivo, esse dispositivo precisa ter estado vinculado e registrando enquanto os outros compartilhavam.

---

## O que o PDF contém (formato de exemplo)

O layout exato pode evoluir; a intenção é um relatório legível em PDF ou papel impresso.

```
WITNESS EAR — 24-Hour Sound Journal
Generated Aug 7, 09:30  ·  Window Aug 6, 10:00 – Aug 7, 09:30
Sources: this phone + Constellation peers.  Repeats within 30 s are logged once.

[summary tiles]     amostras do classificador · episódios (intervalo de 60 s) · grupos de som · intervalo coberto
[Activity by hour]  gráfico de barras de amostras por hora
[Sound groups]      rótulos brutos agrupados por família de perfil (Music, Vehicles, …)
[Locations]         L1, L2, … — posições agrupadas em ~110 m, com notas de precisão
[Devices]           P1 (this phone, model · iOS · app build), P2 … (pares vinculados + model)

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
SHA-256 das N linhas do diário exportadas nesta janela (JSON, chaves ordenadas):
a1b2c3… (digest hex completo)
Precisão de localização / flags de GPS simulado / notas de estado do dispositivo / dispositivo exportador / base de tempo…

Attestation

I, _______________, attest that … Linhas de Signature / Date para caneta após a impressão.
```

Cada página traz uma marca d’água sutil Wingdings atrás do conteúdo e um rodapé com a marca Wingdings, “© 2026 Wingdings, Inc. All rights reserved. · Patent Pending”, e o número da página — uma verificação rápida de que um PDF que alguém te entrega parece uma exportação genuína.

**Como ler**

- **Classifier samples** — número de janelas armazenadas (não “número de sirenes na cidade”).
- **Distinct episodes** — sequências de amostras separadas por cerca de um minuto de silêncio; um som contínuo longo pode ser muitas amostras, mas poucos episódios.
- **Conf** — confiança do modelo (0–100%), **não** decibéis SPL.
- **dBFS** — nível de pico do microfone perto do evento, relativo à escala digital completa daquele telefone (0 = o mais alto que o microfone pode gravar). Bom para comparar momentos; **não** é dB SPL calibrado.
- **Dir** — direção/rumo absoluto da bússola do som (0° = norte), mostrado **somente** quando uma solução com dois microfones realmente mediu um; “—” significa não medido. Nunca inferido de como o telefone estava apontado.
- **By** — identificador do dispositivo da seção **Devices** (P1 = o telefone que exporta, P2… = pares vinculados), alinhado aos L-ids em **Locations**.
- **Integrity hash** — impressão digital do diário no dispositivo usado para montar o PDF; ajuda a detectar edições pós-exportação da tabela de eventos.
- **Attestation** — bloco opcional de assinatura humana após a impressão (você atesta posse/localização).

---

## Privacidade dos dados

| Tópico | Política |
|--------|----------|
| **Padrão** | **Desligado.** Nenhum registro Witness Ear até você optar por ativar. |
| **Onde os dados ficam** | Somente **neste dispositivo**, no sandbox privado **Application Support** do app (veja abaixo). |
| **O que é armazenado** | Metadados de classificação: horário, rótulo, confiança, localização/rumo opcionais se o app já os tiver, id de par opcional quando um evento da malha é mesclado. **Não** é gravação contínua de áudio do dia para o diário nem palavras faladas transcritas (ou traduzidas). |
| **Retenção** | **24 horas rolantes.** Linhas mais antigas são removidas. |
| **Quando você desliga** | O registro **pausa**; as entradas armazenadas são mantidas e ainda expiram após 24 horas. |
| **Controle de exclusão** | Lixeira na linha Witness Ear (visível enquanto o registro tiver eventos), com contagem regressiva cancelável. |
| **Upload** | O Witness Ear **não** envia o diário à Wingdings nem a uma nuvem Witness Ear. |
| **Export** | **Você** escolhe compartilhar o PDF (Mail, Files, AirDrop, etc.). Depois de compartilhado, essa cópia sai do controle do app. |
| **Constellation** | O compartilhamento em malha de detecções ao vivo é um recurso de **rede local** entre seus telefones vinculados. Linhas de diário mescladas ainda ficam no telefone que as recebeu até você exportar ou limpar. |
| **Crianças / uso sensível** | Não use o registro para identificar ou rastrear pessoas. É para **lugares, horários e categorias de som**, não dossiês pessoais. |

### O que significa “Application Support”

**Application Support** é uma pasta privada que pertence apenas ao Vigilant Ear neste telefone. **Não** é um drive na nuvem, **não** é um álbum público de “Files” e **não** é e-mail para o suporte. Outros apps não conseguem lê-la sob as regras normais do iOS.

Em um iPhone com **código de acesso do dispositivo** (ou biometria), o iOS **criptografa os dados do app em repouso** com proteção respaldada por hardware. O Witness Ear **não** envia o diário e **não** adiciona uma segunda camada de criptografia gerenciada pelo app por cima disso. Com o dispositivo bloqueado, o acesso segue as classes padrão de proteção de dados da Apple (tipicamente protegido até o primeiro desbloqueio após a inicialização, salvo configurações mais fortes). Backups (backup criptografado no computador / regras de backup do iCloud) são separados de “ficar no disco do telefone.”

---

## Usar este relatório em disputas

O Witness Ear pode produzir um **registro digital autenticado de metadados acústicos** (o que os classificadores no dispositivo rotularam, quando e qual telefone contribuiu)—útil para conversas **informais** com vizinhos, proprietários, HOAs ou mediadores. **Não** substitui um levantamento certificado Classe 1/2 nem aconselhamento jurídico.

**Passos práticos:**

1. Deixe o **Witness Ear ligado** pelo período que importa (até 24 horas retidas).
2. **Exporte** o PDF; guarde o arquivo original sem regravar por um editor que reescreve PDFs.
3. **Imprima** uma cópia se um rastro em papel ajudar; complete o bloco **Attestation** (nome, local, assinatura, data) à caneta.
4. Indique aos destinatários a seção **Integrity**: a impressão digital **SHA-256** das linhas do diário. Uma reexportação posterior a partir do **mesmo registro inalterado no dispositivo** deve coincidir; editar a tabela de eventos em um editor de PDF não atualiza esse hash corretamente a menos que o atacante também reconstrua a partir de dados de origem compatíveis.
5. Seja explícito: isto é **metadado gerado pelo app**, o horário é o **relógio do dispositivo**, os níveis **não são SPL legal**, e os rótulos podem estar errados.
6. Atualmente **não** operamos um site público “envie o PDF para verificar a assinatura”. O hash é uma **nota de integridade autocontida**, não uma atestação em nuvem da Wingdings.

**Não** invente eventos, recorte o bloco de integridade nem afirme que o PDF é uma medição de ruído certificada.

---

## Avisos legais

1. **Não é um instrumento certificado.** Microfones de telefone **não** são medidores de nível sonoro Classe 1/2. Pontuações de confiança e quaisquer níveis relacionados são **relativos**, não calibrados, e **não devem** ser apresentados como dBA/dBC absolutos para fiscalização, multas ou metrologia legal. O relatório ainda pode ser útil como **registro digital autenticado de metadados acústicos** quando usado com honestidade.

2. **Não é garantia de completude.** O registro só inclui o que os **classificadores no dispositivo** rotularam enquanto o monitoramento estava ativo e o Witness Ear estava **ligado**. Períodos quietos, microfone mudo, app não em execução, baixa confiança ou duplicatas limitadas podem deixar lacunas. A ausência de uma linha **não** prova que um som nunca ocorreu.

3. **Os rótulos podem estar errados.** Motores de aprendizado de máquina podem classificar mal. Uma linha “Siren” significa o melhor palpite do modelo naquele momento—não um veículo de emergência garantido. Trate o PDF como **notas de apoio**, não como verdade absoluta.

4. **Não é um dispositivo de segurança.** Vigilant Ear / Witness Ear são **auxiliares de consciência e acessibilidade**. Não substituem o julgamento humano, alarmes certificados nem serviços oficiais de emergência.

5. **Provas e disputas.** Se você compartilhar um PDF com um proprietário, HOA ou órgão, seja honesto sobre o que é: um **registro de classificação gerado pelo app**, com retenção limitada, exportado pelo usuário, com hash de integridade no dispositivo. Não altere a tabela de eventos nem invente eventos. Não oferecemos aconselhamento jurídico; as regras locais sobre gravações e provas variam—em caso de dúvida, consulte um profissional qualificado.

6. **Relatórios multi-telefone.** Linhas de pares dependem da conectividade do Constellation e das regras de compartilhamento (p. ex. fontes não-fala). Relógios e GPS de telefones de consumo têm erro; a concordância multi-telefone da “mesma noite” é contexto útil, não sincronização de laboratório.

7. **Base de tempo.** Os carimbos de data/hora usam o **relógio de parede do dispositivo**, que o usuário pode alterar. O PDF registra isso; não há verificação automática cruzada com horário de rede no produto atual.

8. **Sua responsabilidade ao compartilhar.** Depois que você envia um relatório por AirDrop ou e-mail, os destinatários podem guardar cópias. Exporte apenas o que pretende compartilhar.

---

## Notas de plataforma

- **iOS / iPadOS:** os controles do Witness Ear ficam em **Preferences → SOUND JOURNAL**, conforme descrito acima.

---

## Bom saber

- Deixar o Witness Ear **desligado** não custa nada em CPU ou bateria do telefone.
- Ligá-lo **adiciona** armazenamento local leve e gravações ocasionais de eventos para montar o relatório.
- **Export** gera o PDF sem exigir um menu de usuário separado.
- Para alertas e direção do dia a dia, use o mapa principal do Vigilant Ear e os HUDs; use o Witness Ear quando precisar de um **instantâneo escrito portátil** dos eventos sonoros do último dia.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
