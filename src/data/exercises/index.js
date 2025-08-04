// 导入各个分类的数据
import { tab01 as tab01Data } from './tab-01.js'
import { tab02 as tab02Data } from './tab-02.js'
import { tab03 as tab03Data } from './tab-03.js'
import { tab04 as tab04Data } from './tab-04.js'

// 分类配置，包含路由、TDK和显示名称
export const exercisesConfig = [
    {
        id: 'tab-01',
        path: '/lower-back-stretches', // 实际的路由路径
        name: 'Lower Back Stretches', // 显示名称
        title: 'Lower Back Stretches', // 页面标题
        description: 'Discover effective lower back stretches for pain relief and improved flexibility. Expert-guided exercises to strengthen your core and maintain a healthy spine.', // 页面描述
        data: tab01Data,
        seo: {
            title: 'Lower Back Stretches - Pain Relief & Flexibility',
            description: 'Find effective lower back stretches for pain relief and improved flexibility. Expert-guided exercises to strengthen your core and maintain a healthy spine.',
            keywords: 'lower back stretches, back pain relief, flexibility, core strength, spine health'
        }
    },
    {
        id: 'tab-02',
        path: '/lower-back-stretches-for-pregnantwomen',
        name: 'Lower Back Stretches for Pregnant Women',
        title: 'Lower Back Stretches for Pregnant Women', // 页面标题
        description: 'Discover safe and effective lower back stretches designed specifically for pregnant women. Expert-guided exercises to relieve pregnancy-related back pain.', // 页面描述
        data: tab02Data,
        seo: {
            title: 'Lower Back Stretches for Pregnant Women - Safe & Effective',
            description: 'Discover safe and effective lower back stretches designed specifically for pregnant women. Expert-guided exercises to relieve pregnancy-related back pain.',
            keywords: 'pregnancy back pain, safe stretches, pregnant women exercises, back pain relief'
        }
    },
    {
        id: 'tab-03',
        path: '/lower-back-stretches-for-men',
        name: 'Lower Back Stretches for Men',
        title: 'Lower Back Stretches for Men', // 页面标题
        description: 'Build strength and improve mobility with lower back stretches designed for men. Expert-guided exercises to prevent injury and maintain peak performance.', // 页面描述
        data: tab03Data,
        seo: {
            title: 'Lower Back Stretches for Men - Strength & Mobility',
            description: 'Build strength and improve mobility with lower back stretches designed for men. Expert-guided exercises to prevent injury and maintain peak performance.',
            keywords: 'men back exercises, strength training, mobility, injury prevention, back health'
        }
    },
    {
        id: 'tab-04',
        path: '/lower-back-pain-relief-pain',
        name: 'Lower Back Pain Relief Pain',
        title: 'Lower Back Pain Relief Pain', // 页面标题
        description: 'Discover effective lower back pain relief stretches and exercises to help you find relief from pain. Expert-guided exercises to strengthen your core and maintain a healthy spine.', // 页面描述
        data: tab04Data,
        seo: {
            title: 'Lower Back Pain Relief Pain - Effective Stretches & Exercises',
            description: 'Discover effective lower back pain relief stretches and exercises to help you find relief from pain. Expert-guided exercises to strengthen your core and maintain a healthy spine.',
            keywords: 'lower back pain, pain relief, stretches, exercises, core strength, spine health'
        }
    }
]

// 导出所有数据（用于兼容性）
export const allExercises = exercisesConfig.reduce((acc, config) => {
    return acc.concat(config.data)
}, [])

// 根据路径获取配置
export function getConfigByPath(path) {
    return exercisesConfig.find(config => config.path === path)
}

// 根据ID获取配置
export function getConfigById(id) {
    return exercisesConfig.find(config => config.id === id)
}

// 获取所有配置
export function getAllConfigs() {
    return exercisesConfig
} 