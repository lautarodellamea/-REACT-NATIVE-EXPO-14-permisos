export enum PermissionStatus {
  CHECKING = 'CHECKING', // estamos verificando si el usuario ya dio permisos o no
  GRANTED = 'GRANTED', // el usuario dio permisos
  DENIED = 'DENIED', // el usuario no dio permisos
  LIMITED = 'LIMITED', // el usuario dio permisos, pero solo a algunas funcionalidades
  UNAVAILABLE = 'UNAVAILABLE', // el permiso no esta disponible en el dispositivo
  UNDETERMINED = 'UNDETERMINED', // el usuario no ha dado permisos todavia
}