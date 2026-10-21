function Panel({Children, judul}) {
    return (
        <>
            <div className="panel">
                {judul && <h2>{judul}</h2> }
                {Children}
            </div>
        </>
    )
}
export default Panel