# Todo list

### Entidades y atributos

- Users ( id, username, email, password )
- projects ( id, user_id, title, description )
- tasks (id, project_id, name, is_complete )

## Relaciones

1. Un **usario** _tiene_muchos_ **proyectos**
2. Un **proyecto** _tiene_muchas_ **tareas**

## Modelo relacional

https://dbdiagram.io/d/63ff84cb296d97641d84b37d

## Reglas de negocio

### Users

1. **Crear** un **_Login_** ✔
2. **Ver** la informacion de la cuenta ✔
3. **Editar** solo el "_**username**_" de la cuenta ✔
4. **Eliminar** la cuenta (_user_) ✔

### Projects (acciones con login)

1. **Crear** un proyecto **según el login** ✔
2. **Ver** todos los proyectos con sus "_**tareas**_" ✔
3. **Editar** el "título" o "descripción" de un proyecto ✔
4. **Eliminar** un proyecto con sus tareas ✔

### Tasks (acciones con login)

1. **Crear** las tareas de un proyecto ✔
2. **Editar** una tarea en particular (**_isComplete a true_**) de un proyecto ✔
3. **Eliminar** una tarea en particular de un proyecto ✔
#   t o d o - l i s t - a p i  
 