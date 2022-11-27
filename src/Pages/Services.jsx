import userContext from "../Context/userContext"
import Base from "../Components/Base"
import { Card, CardBody, Container } from "reactstrap";

const Services = () => {
    return (
        <userContext.Consumer>
            {
                (user) => (

                    <Base>
                        <Card>
                            <CardBody>
                            <h1 className="text-center">Welcome {user.user.login && user.user.data.name}</h1>
                        <Container className="text-center">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA/FBMVEUThwj/mTT/////mDAAfAD+plD8//3o6OgAAHz///0AAIAAAH0AAHn///sAAHUAAIIAAHEAAGz/q1bo6+/3//96e7D29vtLS5nh4+3w8fgqKYoAAIoAAGljZ6SUlcA+P5JYWaKcncapqs/T1uS4uNYlJY/FyNysrsv9qEz+pVf/rlXZ3/Cyvd6fqNJ5eqsbF4kOD4qan708OpO8vtOFhbVzc6yEibJBQo+qq8BoZ68pLYWios9KS5ZqbKPZ3+O4vNFdX54wMYWFh8E4NZbKzt5aW6hycrQVF39fYKxkY6LGx9QpJ4zr6/i/w+GRk7iSkcJXVqs4NZgmIZMiI36aTzhdAAAKnUlEQVR4nO2b+2/jNhKAc3O3XlIckfK6smQntvWKvL20cfxQ0qR523HqOo672///f7mh0nugAg64X6RDdr4AC/kFUN8Oh0OKPPgL82cOmm7A/yHspAo7qcJOqrCTKuykCjupwk6qsJMq7KQKO6nCTqqwkyrspAo7qcJOqrCTKuykCjupwk6qsJMq7KQKO6nCTqqwkyrspAo7qcJOqrCTKuykCjupwk6qsJMq7KQKO6nCTqqwkyrspAo7qcJOqrCTKuykCjupwk6qsJMq7KQKO6nCTqqwkyrspAo7qcJOqrCTKuykCjupwk6qsJMq7KTKwV+ZP3PwoVk+f/j8/YcPnz793fLp04cP33/+/LnhNh10oHm+O1n98OOPP/6wOvmu6aYQnYOPstUg1ILsdIJCIQpEJXDi33UkNNkk+fHgY3P/IVJCFigUDmEcY4y9EKiCzAUJblPNatCJlN1Xg4jkQTmOtpGiSjsULWfTliubaliTcTI1ShlBCswMhRkH+UI7JEYYep9eN9auppxIOHlQgv4ORRDNIVmEELjusMjz86ntTPTJRSibCZXG4iQRFCJGUGD0fross8dVzzoY5lBoxPKjpJmmNeKEbn2tKXGIftrJem7adl3Z6h5+lK4L5qOEJP5ZCMoreg1NZJWG4uTadg9zc3xL1y54mZSyhyFIN9TleHM3XiGNQhjBN+NkVGaMdmd+KG3UBAENQj29o6CIL6yT7gTg2A5CYtRA6+p3QiFRRkm0zCQ8FLZ3LI4olXT0mHRsfepHMNi7bh6QNtFEpDTgBAqKALGgS1eudEYi5noKMvSm4L4cJfRujl1bz8GCsjAW34ATSLSNEpOCSyk1wh64PW8JcOvtqWTRK1Lg+CRGwg4TbUT9o0/tTtzQO6RCdbU6urPdJvUCChTjhbDzLqU78noSfMq29Ob4KIUZGoVhzYNP3U5cmNGAI/QLZN65fWOth9Sb9B4yHUDHM+Cu9MB+MGxTvpkYB82o5pRSu5MEHaE2uY0D775LqVXoFSR4TF3qARKKGnnspfRFvz0kFXNta/+k3ulg7X1HKKPysmyDGB86NpE+Q4o6HZOXQD/Co74mdZftwn7bhQEVb6LeJtbtJEYjDhehVSLdBZqcajUzABT+GM9OUIxD1DvZ+k0Hb2sF+UwcGoxrbWO9TiibOso578yilJTYbCoSGCLOA3Xskyuj0y9OH3pLve3axLoaOekKlWNqXUyp1YmEO3QMXkqZeKM5vZQD1H6Lku65EhuhLvFwjzjufBVO6IJMrz2/BSsq8HBeZ5qt14l8ohvUVKRCL/K2SQtkpPV9rNX6Qe3xaq1/GznPKxprKOOkkefYVPyTLfF/qXPZoFYnbgupXFvYJTQJmfDMaw8CVBe+NomOt4GvY9SPiCKD9F7rTZcqGLf7O82gsfVencg5olmU3UCC2x1ogcVJJHC/aCcX/mZ9M5vq+IpSanivrRjZskkHrpXB3Xt1Ar4wThT/+vb4RELuoNDRI3qpP8mvk2k03/pDrfcDT+jr3puF1WtE+UY9vlsnF5Qu8/ml5838ZPUCtjhBMdlFCINVkWc34Sw8ekr7mhItfRhmi+1R+ylfaaOua2xlvU60MfpVupAXjtdGHC3ukvsJevndNTz+nCTJsHt211EORidhvHG0175IugAtQwmlxlbW6uSFZsTimubD1HFy/1ALheKsiBc47O0jSjWj8b6Voih+mzmIqLfDl7KKKehnNH2ujVqd5JqyZTnzs1Nid3XeV/bp332e+eWqmhJpEsyTK2UXqf20lEec0kc6r6+ZtTrZ0fxv/e+XrV443pz6+0XhP5VPuxw1SfO+hzgpVv/xs94ZxcmuvmbW6mQulHPTDdO7JPajWf+MOohSk4fAT5w3JwazeZa8Do5HwfXTZbEYxkkyzvLIOGJeXzNrd7JdB7Nl/8xRqLWwk+SHwXRXLtLbOMHHgWqjEPaxMWrP87R5vgoCodQ7diKeyivZ7XXCdLUbRgt/Mwuy4z/iRGT5LptuthfBvT9NsjTsdO1UkH73Xp3sNPWOO3sl7fyltdtQp9DLXXj6ZAPFoHM5Dyg0TN9flbsOyicddqao9HvNJ6lnDnVklwxcKVNfeULgMo5HuLt80oaGnee7ZTLeKFvempu8Jd9mwzHNksq1t5qo1UnXoxt/tVcv02OPypP++T5S2M9M8rr4MlnepNHtFY6etkslNGpVvA3AMRrjdetrZr11rFGOkG4rGbVx4o9TCWMlxOjRWxf5l9u9v+7EOjlVStz0wnx4M2lrHMwl9JCGpRpbWa+Te6WcIjq8idOyGmtRjxGzQJu4vcI8ioaq9+QFBRpUWfn9k/ni/nBDcaLua2xlvU6GVLTZhVZKsVSjrgx622wmjI/XCxPPilGkTxSax6BtdNRzbd6xv7qkkm1YYyvrXVNK7Uatu3IsceW50JMxbFAtl2LxvF0oX2wExjQSpSnNfrys3GjhQuuakm5a44JsvU6AlKCT29EkXGocS1goEa2FWCMVZmv80heTU8qoHQhPnaOozKu3lISMqHORumYnC6pD8JWcJB7GLYAx6ssOiv4IgwcM0CyFXuceTqhRvYWgWsYFHylM/HfrREKIjtEhdCO9t0GQIy7cvTZjZWbPIlBYRKb9Ek70knKO242dqAd7yrAifL/r9iAv6Abj/PC8azNtD3EKXQcHocKfJ9qPcNLVagAfA223nUhwx7PsVDhqRIbqa2a9446kyFBGrMvtJa68olmMnAoBicZuX71mKLpjRXEERbuQbqklQRqrcni3zzIsI2HU7O2heKRScFsTGmAWGMFSTwFVDpEYkK7Ys6OvhNapEWpWbxPrdiJTQbM9fUmXC2MfG4/bNAEatRMIdAIDPaS+RIHiwq/aLlP7nqEKrsa5jqX+fUo+lhU+jJ/tQAR97ElwdBcKHEPuXdqHQDf2e6FZQejROIwFtGptYe1xIt2v2phJNx1JmzHm3k8gO3ayPPR2IB3H7nfTof0MRieZQ8PUV7fm/dS178lpUQAIJbaP5cELd2RL/V89qt5ozkP9yXtxZUtt7ENRaXsOSbmFd75PiXBpeHFUe293PK68kCIiblP/ydo03oRtu4Mg9ewWtvRlphyls29g3yPd4lTZrfZUnEIQ245RBJQx8rY9c9B/tPPDBfWlgT3GIkQMtR/kaSJOqJ8IihQzgdula1chtwm4bogd+jcuH4m529sUBR4qmg/XfzijoTMIY21P7lwHYXkio90hUy+mZ9euPVvgQhhcGYemRtMmTns14oSCY4dCKYXLq2Xuhn2bUnuTrvVDmu6CuBBGOMJuT/pmziDQjXZGVOXbdenf4Y4mPXTzI9dGyDzbaUcpeyhjFjbQNGjwTBONNgbtEx0qVhaFeQ7hHuLJw6pQb4960Bk2dUqyubNvLvQKe/iP+pCmfLq9cCaUeYU9PmpPSQ46jR0cbfQsLdz6Rv/zDO1beNhXSjtFQ92mpFknAK3xk6Bo+UOIQ3GCKhh3mzje9S+adVLeeXc1HEwUiaEi7etmmHdBNqqEnNS4Aei/8vLy0nQT/qB38DfmzxwwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMP8j/wDo5HDGIuFJBAAAAAASUVORK5CYII=" alt=""/>
                        </Container>
                            </CardBody>
                        </Card>
                    </Base>
                )
            }
        </userContext.Consumer>
    )
}

export default Services;