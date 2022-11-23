import userContext from "../Context/userContext"
import Base from "../Components/Base"

const Services = () => {
    return (
        <userContext.Consumer>
            {
                (user) => (

                    <Base>
                        <h1>
                            This is services page
                        </h1>
                        <h1>Welcome {user.user.login && user.user.data.name}</h1>
                    </Base>
                )
            }
        </userContext.Consumer>
    )
}

export default Services;