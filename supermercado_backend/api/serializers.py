# api/serializers.py
from rest_framework import serializers
from .models import Usuario, Producto, Venta, DetalleVenta
from django.contrib.auth import authenticate

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = '__all__'

class DetalleVentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleVenta
        fields = '__all__'

class RegistroSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ['nombre', 'email', 'password', 'rol']

    def create(self, validated_data):
        user = Usuario(
            nombre=validated_data['nombre'],
            email=validated_data['email'],
            rol=validated_data['rol'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        if email and password:
            user = authenticate(username=email, password=password)
            if user:
                data['user'] = user
            else:
                raise serializers.ValidationError("Credenciales inválidas")
        else:
            raise serializers.ValidationError("Debe incluirse tanto el correo electrónico como la contraseña")
        return data
