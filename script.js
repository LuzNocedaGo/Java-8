let container = document.querySelector('.container')

let data = {
    img: "https://slovnet.ru/wp-content/uploads/2018/10/1-7.png",
    name: "Steven",
    surname: "Universe",
    newinfo: "Стивен Кварц Юнивёрс (англ. Steven Quartz Universe) — протагонист «Вселенной Стивена». Сын Грэга Юниверса и Розы Кварц/Розового Алмаза. Стивен — уникальное существо, результат альтернативного слияния двух совершенно разных существ. Является единственным наполовину органическим Кристальным самоцветом, имеющим половые признаки.",
}


function human(data){
    let info = document.createElement('div')
    info.classList.add('info')

    let img = document.createElement('img')
    img.classList.add('img')
    img.setAttribute('src', data.img)

    let namexsurname = document.createElement('div')
    namexsurname.classList.add('namexsurname')

    let name = document.createElement('p')
    name.classList.add('name')
    name.textContent = data.name

    let surname = document.createElement('p')
    name.classList.add('surname')
    surname.textContent = data.surname

    let newinfo = document.createElement('p')
    newinfo.classList.add('newinfo')
    newinfo.textContent = data.newinfo

    info.prepend(img)
    info.append(namexsurname)
    info.append(newinfo)

    namexsurname.prepend(name)
    namexsurname.append(surname)

    return info
}

let news = human(data)
container.prepend(news)