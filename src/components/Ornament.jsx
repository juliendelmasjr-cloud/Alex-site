export default function Ornament({ symbol = '✦', style = {}, wrapStyle = {} }) {
  return (
    <div style={{ padding: '0 2rem', ...wrapStyle }}>
      <div className="ornament" style={{ padding: '2.5rem 0', ...style }}>
        <div className="ornament-line"></div>
        <span className="ornament-symbol">{symbol}</span>
        {symbol === '✦' && <div className="ornament-dot"></div>}
        {symbol === '✦' && <span className="ornament-symbol">✦</span>}
        <div className="ornament-line"></div>
      </div>
    </div>
  )
}
