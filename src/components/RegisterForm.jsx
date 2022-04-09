import React, { useState} from "react";
import "./RegisterForm.css"

const initialState = {
    form: { name: '', email: '', password:'', whatsapp: '',  confirmPassword: '',
    skills: [], searchSkill: ''}
}

const RegisterForm = () => {
    const [form, setForm] = useState(initialState)

    const handleChangeField = (e) => {
        e.preventDefault()
        const [name] = e.target.name
        setForm({[name]: e.target.value})
    }

    const handleSave = (e) => {
        e.preventDefault()
        if (setForm.password === setForm.confirmPassword)
            console.log("Salvo com sucesso...", setForm)

        // axios[method](url, user)
        // .then(resp => {
        //     const list = this.getUpdatedList(resp.data)
        //     this.setState({ user: initialState.user, list })
        // })npm start
    }

    const handleAddTag = (e) => {        
        e.preventDefault()
        setForm({skills: [form.searchSkill]})
        console.log(form.searchSkill)
    }

    const renderSkills = () => {
        if (form.skills !== undefined)
        {
            if(form.skills.lenth > 0) {
                return form.skills.map((skill) => <span>{skill}</span>)
            } else {
                return <span>Adicione algumas skills :-)</span>
            }
        }
    }
    return (
        <form action="">
            <div className="header-container">
                <h1>ROBSON</h1>
                <h2>Criar conta</h2>
            </div>

            <div className="form-container">
                <div className="two-fields">
                    <input name="name" onChange={handleChangeField} type="text" placeholder="Nome">{form.name}</input>
                    <input name="lastName" onChange={handleChangeField} type="text" placeholder="Sobrenome">{form.name}</input>
                </div>

                <input name="email" onChange={handleChangeField} type="text" placeholder="E-mail">{form.lastName}</input>
                
                <div className="two-fields">
                    <input name="password" onChange={handleChangeField} type="text" placeholder="Senha">{form.password}</input>  
                    <input name="confirmPassword" onChange={handleChangeField} type="text" placeholder="Confirmar senha">{form.confirmPassword}</input>
                </div>

                <input name="whatsapp" onChange={handleChangeField} type="text" placeholder="WhatsApp">{form.whatsapp}</input>

                <div className="skills-container">
                    <h2>Skills</h2>
                    <input name="searchSkill" onChange={handleChangeField} type="text" placeholder="Adicionar skills">{form.searchSkill}</input>
                    <button onClick={(e) => handleAddTag(e)}>Adicionar</button>
                    <div className="skills-content">
                        {renderSkills()}
                    </div>
                </div>

                <span className="button" onClick={(e) => handleSave}>Criar cadastro</span>
            </div>  
        </form>
    )
}

//<input name="searchSkill" onChange={handleChangeField} type="text" placeholder="Adicionar skills">{form.searchSkill}</input>

export default RegisterForm
    