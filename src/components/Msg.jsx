export default function Msg({ msg, color }) {
    return (
        <div
            className="text-center w-full my-2 rounded text-white"
            style={{ backgroundColor: color }} >

            <p>{msg}</p>

        </div>
    )
}