<PLink to="./">Já possui uma conta? Faça login!</PLink>

const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [foto, setFoto] = useState("");

const navigate = useNavigate();

function cadastrar() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
   const promise = axios.post(URL, {
        email: email,
        nome: nome,
        image: foto,
        password: senha
    });
    promise.then(response => {
        const { data } = response;
        console.log(data);
        navigate("./")
    });
    promise.catch(err => console.log(err.response));
}