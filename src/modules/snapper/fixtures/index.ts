import { URL_PATTERN } from '@/constants'

export const SNAP_EXAMPLES = {
  BILIBILI: {
    url: 'https://www.bilibili.com/video/BV1ct4y1n7t9',
    keyword: '蔡徐坤',
    type: 'video',
  },
  YOUTUBE: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    keyword: 'Rick Astley',
    type: 'video',
  },
}

export const SNAP_TEST_CASES = {
  VALID: {
    input: {
      url: SNAP_EXAMPLES.BILIBILI.url,
    },
    expected: {
      title: '【4K顶级画质60FPS】蔡徐坤《只因你太美》原版完整版现场！一晃眼6年过去了',
      resource: {
        type: 'video',
        url: {
          pattern: URL_PATTERN,
          example: 'https://example.bilivideo.com/path/to/resource.mp4?token=value',
        },
      },
      preview: {
        url: 'http://i2.hdslb.com/bfs/archive/247c08cb8ccba38d6116b76f012dff33b9eb6c0b.jpg',
      },
    },
  },
  UNSUPPORTED: {
    input: {
      url: SNAP_EXAMPLES.YOUTUBE.url,
    },
    expected: null,
  },
  INVALID: {
    input: {
      url: 'example.com',
    },
    expected: null,
  },
}
