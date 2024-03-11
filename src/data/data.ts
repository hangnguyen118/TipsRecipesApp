import { ImageProps } from "react-native"

interface MenuItems {
    id: string,
    name: string,
    imageLink: ImageProps
}

export const MENUITEMS: MenuItems[] = [
    {
        id: '1',
        name: 'Juice',
        imageLink: require('../assets/app_icons/juice.png')
    },
    {
        id: '2',
        name: 'Healthy',
        imageLink: require('../assets/app_icons/healthy.png')
    },
    {
        id: '3',
        name: 'Diet',
        imageLink: require('../assets/app_icons/diet.png')
    },
    {
        id: '4',
        name: 'Good Food',
        imageLink: require('../assets/app_icons/healthy.png')
    },
    {
        id: '5',
        name: 'Blender',
        imageLink: require('../assets/app_icons/blender.png')
    }
]

export interface Recipes {
    id: string,
    title: string,
    description?: string,
    imageLink: ImageProps,
    recipe: string,
    nutritionnalInfomation?: string, 
}

export const RECIPES: Recipes[] = [
    {
        id: '1',
        title: 'Ép tỏi và rau mùi',
        description: 'Rau mùi chứa rất nhiều vitamin, khoáng chất cần thiết cho cơ thể. True Juice xin giới thiệu TOP công thức nước ép rau mùi giảm cân, đẹp dáng.',
        imageLink: require('../assets/app_images/food_images/toi_va_mui.jpg'),
        recipe: '3 quả cà chua, ¼ củ hành, 2 tép tỏi, 1 quả ớt chuông đỏ, 1 nắm rau mùi',
        nutritionnalInfomation: 'Nước: 86,3%, Protein: 3,3%, Lipid: 0,6%, Carbohydrate: 6,3.%, Chất xơ: 1,2%, Vitamin: Vitamin A, vitamin C, vitamin K, vitamin B1, vitamin B2, vitamin B3, vitamin B6, vitamin E, Khoáng chất: Kali, canxi, sắt, magie, photpho, kẽm, đồng, mangan, selen'
    },
    {
        id: '2',
        title: 'Ép tỏi và rau mùi',
        description: 'Rau mùi chứa rất nhiều vitamin, khoáng chất cần thiết cho cơ thể. True Juice xin giới thiệu TOP công thức nước ép rau mùi giảm cân, đẹp dáng.',
        imageLink: require('../assets/app_images/food_images/toi_va_mui.jpg'),
        recipe: '3 quả cà chua, ¼ củ hành, 2 tép tỏi, 1 quả ớt chuông đỏ, 1 nắm rau mùi',
        nutritionnalInfomation: 'Nước: 86,3%, Protein: 3,3%, Lipid: 0,6%, Carbohydrate: 6,3.%, Chất xơ: 1,2%, Vitamin: Vitamin A, vitamin C, vitamin K, vitamin B1, vitamin B2, vitamin B3, vitamin B6, vitamin E, Khoáng chất: Kali, canxi, sắt, magie, photpho, kẽm, đồng, mangan, selen'
    },{
        id: '3',
        title: 'Ép tỏi và rau mùi',
        description: 'Rau mùi chứa rất nhiều vitamin, khoáng chất cần thiết cho cơ thể. True Juice xin giới thiệu TOP công thức nước ép rau mùi giảm cân, đẹp dáng.',
        imageLink: require('../assets/app_images/food_images/toi_va_mui.jpg'),
        recipe: '3 quả cà chua, ¼ củ hành, 2 tép tỏi, 1 quả ớt chuông đỏ, 1 nắm rau mùi',
        nutritionnalInfomation: 'Nước: 86,3%, Protein: 3,3%, Lipid: 0,6%, Carbohydrate: 6,3.%, Chất xơ: 1,2%, Vitamin: Vitamin A, vitamin C, vitamin K, vitamin B1, vitamin B2, vitamin B3, vitamin B6, vitamin E, Khoáng chất: Kali, canxi, sắt, magie, photpho, kẽm, đồng, mangan, selen'
    }
]

export interface Blog {
    id: string,
    title: string,
    content: string,
    imageLink: ImageProps,
    creationDay: string,
    author: string
}

export const BLOGS: Blog[] = [
    {
        id: '1',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '2',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '3',
        title: 'Hỏi đáp cùng thầy Minh Niệmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '4',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '5',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '6',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '7',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '8',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '9',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '10',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '11',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
    {
        id: '12',
        title: 'Hỏi đáp cùng thầy Minh Niệm',
        content: 'Như tên gọi của rau diếp cá thì chúng có mùi hơi tanh. Rau diếp cá có một hợp chất chống oxy hóa rất mạnh là polyphenol giúp cơ thể chống lại các gốc tự do có hại – nguyên nhân gây ra lão hóa, ung thư và nhiều loại bệnh khác. Ngoài ra nó còn có tác dụng thanh nhiệt, thải độc, chống viêm cho cơ thể.',
        imageLink: require('../assets/app_images/bg-blog.jpg'),
        creationDay: '10/1/2023',
        author: 'Thầy Minh Niệm'
    },
]

export const SEARCHLIST = [
    {
        creationDay: '10:00',
        content: 'ssd 4 tb'
    },
    {
        creationDay: '11:11',
        content: 'Công hòa xã hội'
    },
    {
        creationDay: '11:12',
        content: 'Bình Dương đánh nhau'
    },
    {
        creationDay: '12:12',
        content: 'Top phim mới hay'
    },
    {
        creationDay: '12:13',
        content: 'Leo núi Tây Ninh'
    }
]