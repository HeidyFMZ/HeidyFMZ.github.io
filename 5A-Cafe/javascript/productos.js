function comprarProducto(nombre, descripcion, precio, imagen) {
    document.getElementById('nombre-producto').innerText = `Producto: ${nombre}`;
    document.getElementById('descripcion-producto').innerText = descripcion;
    document.getElementById('precio-producto').innerText = `Precio: ${precio}`;
    

    document.getElementById('modal-compra').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-compra').style.display = 'none';
}
