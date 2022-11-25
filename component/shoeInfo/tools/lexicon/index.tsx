import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export function Lexicon() {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.title}>LEXIQUE GLOBALE</Text>
                <Text style={styles.letter}>C</Text>
                <Text style={styles.text}>Camp Out : Le fait d’attendre devant un shop (plusieurs heures) pour être le premier à obtenir une paire. Le camp out est maintenant globalement terminé. Les paires sortent en raffle.</Text>
                <Text style={styles.text}>Collection capsule : Une collection limité réalisée en partenariat avec une marque indépendante, un designer…</Text>
                <Text style={styles.text}>Cop : Le fait de vouloir acheter la paire. Je cop.</Text>
                <Text style={styles.letter}>D</Text>
                <Text style={styles.text}>Drop : Tout l’inverse, quand on laisse passer une paire qui ne nous intéresse pas. Drop.</Text>
                <Text style={styles.text}>DS (Dead Stock): Quand une paire est neuve, jamais portée ni sortie de son emballage, sa condition est DS.</Text>
                <Text style={styles.letter}>F</Text>
                <Text style={styles.text}>Fake: Quand une paire est fausse, qu’il s’agit d’une contrefaçon.</Text>
                <Text style={styles.letter}>G</Text>
                <Text style={styles.text}>GR (General Release): Quand une paire est disponible dans toutes les boutiques, en grande quantité.</Text>
                <Text style={styles.letter}>H</Text>
                <Text style={styles.text}>Hook-up : Quand vous ne pouvez pas acheter la paire vous même et que quelqu’un peut la récupérer pour vous. L’intermédiaire pourra parfois demander une petite commission pour vous avoir hook-up la paire.</Text>
                <Text style={styles.text}>HS (Hyperstrike): Généralement, les paires HS sont distribuées en maximum 100 exemplaires. Il s’agit de modèles très limités, parfois issus d’une collection capsule.</Text>
                <Text style={styles.text}>HTM : H pour Hiroshi Fujiwara, T pour Tinker Hatfield, M pour Mark Parker</Text>
                <Text style={styles.letter}>L</Text>
                <Text style={styles.text}>Legit : Ce terme que l’on trouve souvent sur les groupes spécialisés Facebook signifie de la paire est authentique.</Text>
                <Text style={styles.text}>LPU (Last Pick Up): Le dernier achat d’une paire de sneakers.</Text>
                <Text style={styles.letter}>N</Text>
                <Text style={styles.text}>NDS (Near Dead Stock): La paire a déjà été portée une fois et son état est comme neuf. Etant donné qu’elle est sortie de sa boite, son état n’est plus DS mais NDS.</Text>
                <Text style={styles.text}>Never Worn : Une paire jamais portée.</Text>
                <Text style={styles.letter}>O</Text>
                <Text style={styles.text}>OG (Original): Ce terme désigne tout simplement un modèle original de sneakers. Parfois, les marques rééditent des versions OG plusieurs années après.</Text>
                <Text style={styles.letter}>Q</Text>
                <Text style={styles.text}>QS (Quickstrike): Il s’agit de paires qui sortent en édition limitée et chez un nombre de distributeurs réduit.</Text>
                <Text style={styles.letter}>R</Text>
                <Text style={styles.text}>Restock : Quand une marque ou un shop décide de remettre en vente une paire qui était sold out.</Text>
                <Text style={styles.text}>Rocker : Le fait de porter une paire.</Text>
                <Text style={styles.letter}>S</Text>
                <Text style={styles.text}>Sample : Il s’agit d’un prototype qui n’est pas destiné à être commercialisé. On voit souvent des sample de modèles dans des coloris qui ne sont jamais sortis en boutique.</Text>
                <Text style={styles.text}>Size Swap : Quand vous cherchez à échanger votre paire contre le même modèle dans une taille différente, vous pouvez demander un size swap.</Text>
                <Text style={styles.text}>Sole Swap : Que ce soit pour un custom ou une restauration, le Sole Swap consiste à changer la semelle inférieure de la basket.</Text>
                <Text style={styles.text}>Swoosh : Designe la virgule de Nike.</Text>
                <Text style={styles.letter}>T</Text>
                <Text style={styles.text}>Trade : Lorsqu’un individu souhaite échanger une paire contre un autre modèle ou quoique ce soit, on utilise le terme trade.</Text>
                <Text style={styles.text}>TTS : True to size. Quand quelqu’un demande comment une paire taille, on peut lui répondre TTS si elle taille correctement.</Text>
                <Text style={styles.letter}>P</Text>
                <Text style={styles.text}>Pinroll : Cela consiste a remonter l’ourlet de son jean pour mettre en valeur ses baskets.</Text>
                <Text style={styles.letter}>W</Text>
                <Text style={styles.text}>WTB : Want to buy</Text>
                <Text style={styles.text}>WTS : Want to sell</Text>
            </TouchableOpacity>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    title: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '900',
        color: '#5F0ABB',
    },
    letter: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '700',
        color: '#5F0ABB',
    },
    text: {
        marginBottom: 10,
    },
});
