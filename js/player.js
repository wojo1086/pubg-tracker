import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Player extends LitElement {
    static properties = {
        name: {},
        wins: {},
        losses: {}
    };

    static styles = css`
        .wrapper {
            color: #efefef;
            padding: 24px;
            box-sizing: border-box;
            width: 624px;
            margin-bottom: 12px;
            //background: top left url("../img/grey-background.png") #222222;

            background: rgba(22, 22, 22, 0.3607843137254902);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid rgba(34, 34, 34, 0.3);
            display: flex;
        }
        .wrapper > div {
            flex: 1;
        }
        .yellow {
            color: #F2AA00;
        }
        .red {
            color: red;
        }
    `;

    constructor() {
        super();
    }

    render() {
        const totalPlays = Number(this.wins)+Number(this.losses);
        const winLossDecimal = isNaN(+this.wins / totalPlays) ? 0 : (+this.wins / totalPlays).toFixed(2);
        return html`
            <div class="wrapper">
                <div>
                    <h1>${this.name}</h1>
                    <p>Wins: <span class="yellow">${this.wins}</span></p>
                    <p>Losses: <span class="red">${this.losses}</span></p>
                </div>
                <div class="win-loss">
                    <h2>W/L</h2>
                    <p>${this.wins}/${totalPlays}</p>
                    <p>${winLossDecimal}</p>
                </div>
            </div>
        `;
    }
}
customElements.define('app-player', Player);
