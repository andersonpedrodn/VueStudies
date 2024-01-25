<script>
    new Vue({
        el: '#desafio',
        data: {
            nome: 'Anderson Nascimento',
            idade: '30',
        },
        methods: {
            saudacao: function() {
                this.titulo = 'Bom dia'
                return this.titulo
            }
        }
    }) 
</script>