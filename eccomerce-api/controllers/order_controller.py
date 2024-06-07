from flask import Blueprint, request, jsonify
from models import db, Order, Product
from flask_jwt_extended import jwt_required, get_jwt_identity

order_bp = Blueprint('order', __name__)

@order_bp.route('/', methods=['GET'])
@jwt_required()
def get_orders():
    user_id = get_jwt_identity()
    orders = Order.query.filter_by(user_id=user_id).all()
    return jsonify([order.to_dict() for order in orders]), 200

@order_bp.route('/', methods=['POST'])
@jwt_required()
def create_order():
    data = request.get_json()
    user_id = get_jwt_identity()

    product_id = data.get('product_id')
    quantity = data.get('quantity')

    product = Product.query.get_or_404(product_id)

    if product.stock < quantity:
        return jsonify({'message': 'Insufficient stock'}), 400

    new_order = Order(
        user_id=user_id,
        product_id=product_id,
        quantity=quantity,
        status='Pending'
    )

    product.stock -= quantity

    db.session.add(new_order)
    db.session.commit()
    return jsonify(new_order.to_dict()), 201
