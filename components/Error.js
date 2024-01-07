import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h2>
                Page accessed have error - {error.status}: {error.statusText}
            </h2>
        </div>
    )
}

export default Error