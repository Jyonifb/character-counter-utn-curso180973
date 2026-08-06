const ProgressBar = ({letter}) => {
return (

    <li key={letter.letterName} className="density-item">
        <span className="letter">{letter.letterName.toUpperCase()}</span>
        <meter min="0" max="100" value={letter.percentage} className="progress"></meter>
        <span className="value">{letter.amount} ({letter.percentage.toFixed(2)}%)</span>
    </li> 

)


}

export { ProgressBar }

