import path from 'path'
import { builtinModules } from 'module'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import esbuild from '@rollup/plugin-esbuild' // 推荐官方插件

const input = path.resolve(process.cwd(), '.output/server/index.mjs')
const pkg = (() => {
  try { return require(path.resolve(process.cwd(), 'package.json')) } catch (e) { return {} }
})()
const deps = Object.keys(pkg.dependencies || {})

export default {
  input,
  // 启用内联动态导入以生成单个文件
  inlineDynamicImports: true,
  external: id => {
    if (builtinModules.includes(id)) return true
    if (deps.some(d => id === d || id.startsWith(d + '/'))) return true
    return false
  },
  plugins: [
    resolve({ preferBuiltins: true, exportConditions: ['node'] }),
    commonjs(),
    json(),
    replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production') }),
    esbuild({ target: 'node16', minify: true, platform: 'node', sourcemap: true })
  ],
  output: {
    file: path.resolve(process.cwd(), 'dist/server/index.js'),
    format: 'cjs',
    sourcemap: true,
    exports: 'auto'
  }
}