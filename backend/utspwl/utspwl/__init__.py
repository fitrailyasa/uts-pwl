from pyramid.config import Configurator
from .views.product_view import (
    list_products,
    add_product,
    update_product,
    delete_product,
    purchase_product,
    get_product_details
)

def main(global_config, **settings):
    config = Configurator(settings=settings)
    config.include('pyramid_sqlalchemy')  # Misalnya, jika Anda menggunakan SQLAlchemy
    config.include('pyramid_tm')  # Misalnya, jika Anda menggunakan Transaksi Pyramid

    # Menghubungkan rute dengan view yang sesuai
    config.add_route('home', '/')
    config.add_route('get_products', '/products')
    config.add_route('add_product', '/products/add')
    config.add_route('delete_product', '/products/delete')
    config.add_route('update_product', '/products/update')
    config.add_route('calculate_total_price', '/products/calculate_total_price')
    config.add_route('get_product_details', '/products/{product_id}/details')

    # Menghubungkan rute dengan view
    config.add_view(list_products, route_name='get_products', request_method='GET')
    config.add_view(add_product, route_name='add_product', request_method='POST')
    config.add_view(update_product, route_name='update_product', request_method='POST')
    config.add_view(delete_product, route_name='delete_product', request_method='POST')
    config.add_view(purchase_product, route_name='calculate_total_price', request_method='POST')
    config.add_view(get_product_details, route_name='get_product_details', request_method='GET')

    # Konfigurasi lain yang mungkin Anda butuhkan

    return config.make_wsgi_app()
