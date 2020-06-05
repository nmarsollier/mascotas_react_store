import { Form, FormTitle } from "mascotas_react_common";
import React from "react";
import { useTokenState, useUserState } from "../store/mascotasStore";

export function StateInfo() {
    const user = useUserState()
    const token = useTokenState()

    return (
        <div>
            <FormTitle>Información de Perfil</FormTitle>

            <Form>
                <div className="form-group">
                    <label>Login</label>
                    <input className="form-control" id="login" value={user?.login} disabled />
                </div>
                <div className="form-group">
                    <label>Nombre</label>
                    <input className="form-control" id="name" value={user?.name} disabled />
                </div>
                <div className="form-group">
                    <label>Permisos</label>
                    <input className="form-control" id="name" value={user?.permissions} disabled />
                </div>
                <div className="form-group">
                    <label>Token</label>
                    <input className="form-control" id="name" value={token} disabled />
                </div>
            </Form>
        </div>
    );
}

