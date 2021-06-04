import AsyncStorage from '@react-native-async-storage/async-storage';

//Busca os links salvos
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

//Salva um link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //Se tiver algum link salvo com esse mesmo ID / ou duplicado preciso ignorar
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink){
        console.log('Esse link já existe na lista');
        return; //Para a execução do código aqui
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Salvo com sucesso');
}

//Deleta algum link especifico
export async function deleteLink(Links, id){
    let myLinks = Links.filter((item) => {
        return (item.id !== id)
    });

    await AsyncStorage.setItem('sujeitolinks', JSON.stringify(myLinks));
    console.log('Link deletado do storage');

    return myLinks;
}