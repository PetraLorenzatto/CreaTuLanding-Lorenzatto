import cartwidget from  '../assets/carrito.png';
export default function CartWidget() {
    return (
        <div>
            <img src={cartwidget} alt="Cart" style={{ width: '30px', height: '30px' }} />
            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>2</span>
        </div>
    );
}