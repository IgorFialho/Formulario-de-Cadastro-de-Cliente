var dados = []

function ApagaRegistro(id) {
   let _confirm = confirm("Deseja realmente apagar este registro ?")

   if (_confirm) {
      for (let i = 0; i < dados.length; i++) {
         if (dados[i].ID == id) {
            dados.splice(i, 1)
         }
      }

      PopulaTabela()
   }
}

function EditaRegistro(id) {
   $("#modalRegistro").modal("show")

   dados.forEach(function (item) {
      if (item.ID == id) {

         $("#txtNome").val(item.Nome)
         $("#txtEmail").val(item.Email)
         $("#txtCpfCnpj").val(item.CpfCnpj)
         $("#txtTelefone").val(item.Telefone)
         $("#txtCep").val(item.Cep)
         $("#txtLogradouro").val(item.Logradouro)
         $("#txtNumero").val(item.Numero)
         $("#txtBairro").val(item.Bairro)
         $("#txtCidade").val(item.Cidade)
         $("#txtEstado").val(item.Estado)

      }
   })



}


function PopulaTabela() {
   if (Array.isArray(dados)) {

      localStorage.setItem("__dados__", JSON.stringify(dados))


      $("#tblDados tbody").html("")


      dados.forEach(function (item) {
         $("#tblDados tbody").append(`<tr>
         <td>${item.ID} </td>
         <td>${item.Nome} </td>
         <td>${item.Email} </td>
         <td>${item.CpfCnpj} </td>
         <td>${item.Telefone} </td>
         <td>${item.Cep} </td>
         <td>${item.Logradouro} </td>
         <td>${item.Numero} </td>
         <td>${item.Bairro} </td>
         <td>${item.Cidade} </td>
         <td>${item.Estado} </td>
         <td><button type="button" class="btn btn-primary"onclick="javascript:EditaRegistro(${item.ID})"><i class="fa fa-edit" /></button></td> 
         <td><button type="button" class="btn btn-danger"onclick="javascript:ApagaRegistro(${item.ID});"><i class="fa fa-trash" /></button></td> 
         
         </tr>`)

      })
   }

}

$(function () {

   dados = JSON.parse(localStorage.getItem("__dados__"))

   if (dados) {
      PopulaTabela()
   }


   $("#btnSalvar").click(function () {


      let Nome = $("#txtNome").val()
      let Email = $("#txtEmail").val()
      let CpfCnpj = $("#txtCpfCnpj").val()
      let Telefone = $("#txtTelefone").val()
      let Cep = $("#txtCep").val()
      let Logradouro = $("#txtLogradouro").val()
      let Numero = $("#txtNumero").val()
      let Bairro = $("#txtBairro").val()
      let Cidade = $("#txtCidade").val()
      let Estado = $("#txtEstado").val()

      let registro = {}

      registro.Nome = Nome
      registro.Email = Email
      registro.CpfCnpj = CpfCnpj
      registro.Telefone = Telefone
      registro.Cep = Cep
      registro.Logradouro = Logradouro
      registro.Numero = Numero
      registro.Bairro = Bairro
      registro.Cidade = Cidade
      registro.Estado = Estado

      registro.ID = dados.length + 1

      dados.push(registro)

      alert("Registro salvo com sucesso")
      $("#modalRegistro").modal("hide")

      $("#txtNome").val("")
      $("#txtEmail").val("")
      $("#txtCpfCnpj").val("")
      $("#txtTelefone").val("")
      $("#txtCep").val("")
      $("#txtLogradouro").val("")
      $("#txtNumero").val("")
      $("#txtBairro").val("")
      $("#txtCidade").val("")
      $("#txtEstado").val("")

      PopulaTabela()


   })



})


