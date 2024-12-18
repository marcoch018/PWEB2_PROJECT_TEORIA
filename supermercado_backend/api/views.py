# api/views.py
from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_201_CREATED
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import Usuario, Producto, Venta, DetalleVenta
from .serializers import UsuarioSerializer, ProductoSerializer, VentaSerializer, DetalleVentaSerializer, RegistroSerializer, LoginSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

class DetalleVentaViewSet(viewsets.ModelViewSet):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer
    

class RegistroView(generics.CreateAPIView):
    serializer_class = RegistroSerializer

    def post(self, request, *args, **kwargs):
        print("Datos recibidos para registro:", request.data)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "user_id": user.pk,
                "email": user.email,
                "nombre": user.nombre,
                "rol": user.rol
            }, status=HTTP_201_CREATED)
        else:
            print("Errores de validación:", serializer.errors)
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        print("Datos recibidos en la solicitud:", request.data)
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            print("Datos no válidos:", serializer.errors)
            return Response(serializer.errors, status=400)
        
        user = serializer.validated_data['user']
        if not user:
            print("No se pudo autenticar al usuario.")
            return Response({"error": "Credenciales inválidas"}, status=400)
        
        token, created = Token.objects.get_or_create(user=user)
        print("Usuario autenticado correctamente:", user.email)
        return Response({"token": token.key, "user_id": user.pk, "rol": user.rol})
