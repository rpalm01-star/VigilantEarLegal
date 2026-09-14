# Acoustic Scope — A visão profissional de análise sonora

O **Acoustic Scope** transforma o Vigilant Ear em um instrumento de análise sonora de bolso: uma visão ao vivo de tudo o que o microfone ouve, de cinco maneiras diferentes. Use-o para *ver* o formato de um som, medir sua altura e seu nível, congelar e percorrer o último meio minuto, e capturar trechos para treinar seu próprio pacote de sons personalizado.

Abra-o pelo **leque de ações** (a explosão giratória na barra superior): toque no leque e depois no **equalizador** (as barras animadas em verde e ciano). O Acoustic Scope é **gratuito para todos** — as visões ao vivo abaixo não exigem nenhuma compra. Apenas as ferramentas de captura do **Train** (abaixo), que gravam trechos para seus pacotes de sons personalizados, fazem parte do Power Pack+.

---

## O cabeçalho

- **Caixa dB** — o nível de banda larga ao vivo. Os quadrados **A / C / Z** escolhem a ponderação de frequência (A ≈ o quão alto soa para o ouvido humano; C preserva mais graves; Z é plana/sem ponderação). A ponderação também comanda a visão de ⅓ de oitava.
- **root** (somente na visão Croma) — a classe de altura musical mais forte no ambiente, atualizada ao vivo.
- **✕** fecha o scope. A detecção e os alertas continuam funcionando o tempo todo enquanto o scope estiver aberto — é uma janela, não um modo.

## As seis visões

Alterne pela barra inferior.

| Visão | O que mostra |
|---|---|
| **Espectro** | Nível por frequência, agora — uma curva ao vivo com uma linha branca de retenção de pico. |
| **Espectrograma** | Frequência ao longo do **tempo** — os últimos ~24 segundos passam rolando, cor = nível. A maioria dos sons tem aqui um formato visual reconhecível. |
| **RTA de ⅓ oitava** | As 28 bandas ISO padrão, como um analisador de tempo real de hardware. Os traços laranja são a retenção de pico. |
| **Croma** | As 12 classes de altura musical — quais notas estão presentes, com a mais forte destacada. |
| **Parciais** | Os tons proeminentes acompanhados ao longo do tempo como linhas coloridas, cada uma identificada com sua nota musical. Ótimo para assobios, sirenes, canto de pássaros e zumbido de máquinas. |
| **Visualizador** | A música do ambiente como um show de luzes ao vivo — as batidas detonam anéis, os graves inflam a cena, os agudos chovem faíscas. Tem sua própria seção completa abaixo. |

**Bandeiras** laranja no Espectrograma marcam os momentos em que o classificador de sons disparou, com seu rótulo e sua confiança — assim você vê exatamente a qual formato o modelo reagiu.

## Ler e medir

- **Controle deslizante à esquerda** — escala de exibição. Puxe para baixo uma visão saturada ou para cima uma silenciosa (apenas exibição; nunca afeta a detecção).
- **Toque** no Espectrograma — uma leitura em cruz: frequência, nível e há quanto tempo.
- **Arraste** uma caixa — estatísticas daquela região: faixa de frequência, duração, pico, centroide, energia, fator de crista.
- **Pince** — amplie o eixo de frequência. O botão ⤢ redefine.
- **ⓘ** — o painel de telemetria (detalhes da FFT, frequência dominante, centroide espectral) mais um ajuste de **calibração** que desloca todas as leituras de nível caso você tenha comparado com um medidor de referência.

## Congelar e revisar

O botão **pausar** congela a imagem (o microfone e os alertas continuam funcionando). Enquanto congelado, aparece uma barra de transporte:

- **▶** reproduz o buffer visualmente; o botão de velocidade alterna entre 1× / 2× / 0,5×.
- **🔍− / 🔍+** ampliam a janela de tempo; o **minimapa** à direita mostra o buffer inteiro — arraste-o para percorrer.
- Espectrograma e Parciais compartilham o mesmo relógio, então você pode alternar entre eles no mesmo instante congelado.

## Capturar sons para um pacote personalizado

Este é o superpoder do scope: obter exemplos reais de um som *no momento em que você o ouve*, direto da visão ao vivo.

1. Toque no botão magenta **Train** (quadrado tracejado). A visão congela e aparece uma **faixa** magenta.
2. Arraste as bordas da faixa em torno de um exemplo limpo do seu som — o rótulo mostra a duração selecionada. Alguns segundos ao redor do som é o ideal.
3. Toque em **Salvar** (o botão de seta para a bandeja). O áudio sob a faixa é gravado em um trecho e aparece uma caixa numerada. A faixa continua armada — percorra até o próximo exemplo e salve de novo (até 6 por sessão). Toque duas vezes em uma caixa numerada para excluir aquele trecho.
4. Toque no **martelo** para abrir o painel **Build**:
   - **Nome do modelo** — o pacote (por exemplo, *Corujas do Quintal*).
   - **Nome do som** — o que os usuários veem no mapa.
   - **Rótulo da classe** — o rótulo exato que o modelo treinado vai emitir (derivado automaticamente; minúsculas e sublinhados).
   - **Quando detectado** — *somente mapa* (um ponto, identificação) ou *em movimento* (acompanhado como um veículo). Sons personalizados identificam; eles não disparam alertas de emergência — disso sempre cuida a detecção de segurança integrada.
   - Ícone, cor, limiar de confiança e alcance máximo — o cartão de pré-visualização ao vivo mostra exatamente como uma detecção vai aparecer.
5. Toque em **Build & Export**. Você recebe um zip com seus trechos (já na estrutura de pastas do Create ML) mais os arquivos do pacote, prontos para enviar a um Mac.
6. No Mac, treine um **Sound Classifier** no Create ML a partir da pasta `clips/`, coloque o `model.mlpackage` exportado na pasta do pacote, compacte novamente e importe no telefone em **Fontes de alerta → Pacotes de sons personalizados**.

A parte de treinamento e importação — incluindo a **classe Background obrigatória** e o controle que evita alarmes falsos — está explicada passo a passo no **[guia de Pacotes de Sons Personalizados](https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/BYOM_pt-BR.md)**.

## A aba Visualizador — música como luz

A aba **Visualizador** transforma a música do ambiente em um show de luzes que um espectador Surdo,
com perda auditiva ou CODA pode *sentir com os olhos*. Nada ali é decoração — cada elemento é
movido por uma característica acústica real, ao vivo, vinda dos microfones:

- **Cada batida detona um anel** — um detector de ataque dispara explosões de anéis e um flash de
  tela exatamente quando uma pessoa ouvinte sentiria o bumbo.
- **Os graves respiram** — o anel âncora no centro e os anéis texturizados à deriva incham com a
  energia de baixa frequência.
- **Os agudos chovem faíscas** — pratos e chimbais caem como gotas brilhantes.
- **O título da música percorre um globo** — quando a música é reconhecida, seu título envolve o
  equador de um globo invisível que atravessa a cena, e o artista ocupa o canto superior direito.

Defina seu **nome de DJ** (e a cor dele) em **Preferências → Acoustic Visualizer** — ele ocupa o
canto superior esquerdo, no mesmo estilo da etiqueta do artista.

**Coloque numa TV:** toque no **botão tv** no cabeçalho do scope, conecte com um cabo USB-C–HDMI
ou Espelhamento de Tela AirPlay e pressione **Mirror** — a tela grande mostra apenas os gráficos,
enquanto este telefone continua sendo os controles e o microfone. Troque as abas do scope no
telefone e a TV acompanha, então o mesmo Mirror coloca o Espectrograma ou o Visualizador na parede.

## Bom saber

- O scope não custa nada quando está fechado — a análise extra só roda enquanto ele está na tela.
- Os valores absolutos de dB não são calibrados por padrão; são consistentes e comparáveis, e o ajuste de calibração em ⓘ permite alinhá-los a um medidor de referência.
- O scope lê o canal do microfone principal. Detecção, localização de direção e alertas não são afetados por nada que você faça aqui.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
