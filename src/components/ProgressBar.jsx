const ProgressBar = ({letter}) => {
return (

    <li key={letter.letterName} class="density-item">
        <span class="letter">{letter.letterName.toUpperCase()}</span>
        <meter min="0" max="100" value={letter.percentage} class="progress"></meter>
        <span class="value">{letter.amount} ({letter.percentage.toFixed(2)}%)</span>
    </li> 

)


}

export { ProgressBar }

