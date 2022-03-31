<div className="card">
                <input typeof="text" placeholder="nome do hábito" value={habito} onChange={(e) => setHabito(e.target.value)} />
                <div className="dias">
                    <div className="dia"></div>
                    <div className="dia"></div>
                    <div className="dia"></div>
                    <div className="dia"></div>
                    <div className="dia"></div>
                    <div className="dia"></div>
                    <div className="dia"></div>
                    <div className="dia"></div>
                    <div className="dia"></div>
                    <div className="dia"></div>
                </div>
                <div className="botoes">
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </div>
            </div>
            <div className="">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>s
            .h1 {
                margin-right: 120px;
                font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            /* identical to box height */
            color: #126BA5;
            }

            .icone {

                width: 40px;
                height: 35px;
                background: #52B6FF;
                border-radius: 4.63636px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 26.976px;
                line-height: 34px;
                /* identical to box height */
                
                text-align: center;
                
                color: #FFFFFF;
                }