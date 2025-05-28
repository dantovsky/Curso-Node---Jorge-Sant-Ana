# MongoDB (revisão)

## Comandos básicos:

- use nome_db

- show dbs

- db.alunos.save({Nome: "Jorge"})

- db.dropDatabase()

## Collections

É semelhante às tabelas do SQL.

Criar nova collection
```
db.createCollection("cursos")
```

Obter os nomes das collections existentes
```
db.getCollectionsNames()
```

Excluir uma collection
```
db.cursos.drop()
```

## Inserindo documentos

(!) `.save()` has been deprecated instead of that .save() you can use .insertOne() or .insertMany() or.updateOne({upsert:true})

db.alunos.save(
    {
        nome: 'José',
        idade: 30,
        sexo: 'M',
        cpf: '123.123',
        rg: '123456',
        matricula: 'abcdef'
    }
)

db.alunos.insertOne(
    {
        nome: 'Maria',
        idade: 25,
        sexo: 'F',
        cpf: '123.124',
        rg: '123457',
        matricula: 'abcdeg'
    }
)


db.alunos.insertOne(
    {
        nome: 'Fernanda',
        idade: 32,
        sexo: 'F',
        cpf: '123.125',
        rg: '123458',
        matricula: 'abcdeh'
    }
)

## Consultando documentos com operadores de comparação

```
=           $eq
>           $gt
>=          $gte
<           $lt
<=          $ltr
!= / <>     $ne
```

Exemplos:
- db.alunos.find({idade:{$gt:25}})
- db.alunos.findOne({idade:{$gte:30}})

## Consultando documentos com operadores lógicos

and
or

Exemplos:
- sexo = F and idade > 30
```
db.alunos.find(
    {
        sexo:{$eq:'F'},
        idade:{$gt:30},
    }
)
```

- nome = Maria or nome = José
```
db.alunos.find(
    {
        $or: [
            {nome:{$eq:'Maria'}},
            {nome:{$eq:'José'}}
        ]
    }
)

# Ou seja, segue essa estrutura
db.alunos.find(
    {
        $or: [
            {},
            {},
            {...}
        ]
    }
)
```

## Atualizando documentos

Estrutura:
```
update(
        {condição » parâmetros para atualização},
        {$set},
        {multi:false} # Valor por padrão = false
)
```

```
db.alunos.update(
        {nome: 'José'},
        {$set: {nome: 'João'}}
)
```

(!) `DeprecationWarning`: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.

```
db.alunos.updateMany(
        {sexo: 'F'},
        {$set: {sexo: 'Feminino'}}
)
```

## Removendo documentos

### Remove todos

db.alunos.remove( {nome: 'Maria'} )

db.alunos.remove( {idade: {$lt: 40}} )

### Remove apenas um (justone)


db.alunos.remove( {idade: {$lt: 40}}, true )
