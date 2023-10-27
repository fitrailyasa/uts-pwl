from pyramid.view import view_config
from pyramid.response import Response
from .models.product import Product

@view_config(route_name='get_products', renderer='json')
def list_products(request):
    products = request.dbsession.query(Product).all()
    product_list = [{'id': product.id, 'name': product.name, 'price': product.price, 'stock': product.stock} for product in products]
    return {'products': product_list}

@view_config(route_name='add_product', request_method='POST', renderer='json')
def add_product(request):
    name = request.json_body.get('name')
    price = request.json_body.get('price')
    stock = request.json_body.get('stock')

    if not name or not price or not stock:
        return {'error': 'Name, price, and stock are required'}

    product = Product(name=name, price=price, stock=stock)
    request.dbsession.add(product)
    request.dbsession.flush()
    return {'success': True}

@view_config(route_name='update_product', request_method='POST', renderer='json')
def update_product(request):
    product_id = request.json_body.get('id')
    name = request.json_body.get('name')
    price = request.json_body.get('price')
    stock = request.json_body.get('stock')

    if not product_id:
        return {'error': 'Product ID is required'}

    product = request.dbsession.query(Product).filter(Product.id == product_id).first()
    if not product:
        return {'error': 'Product not found'}

    if name:
        product.name = name
    if price:
        product.price = price
    if stock:
        product.stock = stock

    return {'success': True}

@view_config(route_name='delete_product', request_method='POST', renderer='json')
def delete_product(request):
    product_id = request.json_body.get('id')

    if not product_id:
        return {'error': 'Product ID is required'}

    product = request.dbsession.query(Product).filter(Product.id == product_id).first()
    if not product:
        return {'error': 'Product not found'}

    request.dbsession.delete(product)
    return {'success': True}

@view_config(route_name='calculate_total_price', request_method='POST', renderer='json')
def calculate_total_price(request):
    product_ids = request.json_body.get('product_ids')

    if not product_ids:
        return {'error': 'Product IDs are required'}

    total_price = 0
    for product_id in product_ids:
        product = request.dbsession.query(Product).filter(Product.id == product_id).first()
        if product:
            total_price += product.price

    return {'total_price': total_price}
