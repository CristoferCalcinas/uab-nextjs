import diacritics from 'diacritics';

export default function filterCarrera(filtro, carreras) {
    const pathFormateado = diacritics.remove(filtro.replace(/-/g, ' '));

    const carreraEncontrada = carreras.find(carrera => {
        return diacritics.remove(carrera.head.title.toLowerCase()) === pathFormateado.toLowerCase();
    });

    return carreraEncontrada || null;
}
