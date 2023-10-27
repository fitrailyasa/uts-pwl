from pyramid.config import Configurator

def includeme(config):
    config.add_route('home', '/')
    config.add_route('get_products', '/products')
    config.add_route('add_product', '/products/add')
    config.add_route('delete_product', '/products/delete')
    config.add_route('update_product', '/products/update')
    config.add_route('calculate_total_price', '/products/calculate_total_price')
    config.add_route('get_product_details', '/products/{product_id}/details')

