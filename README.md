# mascotas_react_store

Modulo Store para toda la UI React de [mascotas modular](https://github.com/nmarsollier/mascotas_react_app).

Ver proyecto original en [mascotas](https://github.com/nmarsollier/mascotas).

## Modo de uso

```bash
    "mascotas_react_store": "git+https://github.com/nmarsollier/mascotas_react_store.git#master",
```

## Dependencias

Esta librería no incluye dependencias internas, todas las dependencias definidas en package.json como devDependencies  deben ser incluidas en el proyecto mascotas_react_app como dependencies

## Uso local

En el proyecto donde quedamos usar este modulo, debemos cambiar

```bash
    "mascotas_react_store": "git+https://github.com/nmarsollier/mascotas_react_store.git#master",
```

por su directorio local:

```bash
    "mascotas_react_store": "file:../mascotas_react_store",
```

De este modo usaremos la version local, para que tome los cambios hay que hacer build

```bash
    npm run build
```
