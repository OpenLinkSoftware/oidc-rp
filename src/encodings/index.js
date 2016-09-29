/**
 * Encodings
 */
const encodings = {

  /**
   * buf2ab
   *
   * @description
   * Convert a Buffer instance to an ArrayBuffer instance
   *
   * @param {Buffer} buffer
   * @param {TypedArray} type
   * @returns {ArrayBuffer}
   */
  buf2ab (buffer, type = Uint8Array) {
    let ab = new ArrayBuffer(buffer.byteLength)
    let view = new type(ab)

    for (let i = 0; i < buffer.byteLength; i++) {
      view[i] = buffer[i]
    }

    return ab
  },

  /**
   * ab2buf
   *
   * @description
   * Convert an ArrayBuffer instance to a Buffer instance
   *
   * @param {ArrayBuffer} buffer
   * @returns {Buffer}
   */
  ab2buf (ab, type = Uint8Array) {
    let buf = new Buffer(ab.byteLength)
    let view = new type(ab)

    for (let i = 0; i < buf.length; ++i) {
      buf[i] = view[i]
    }

    return buf
  },

  /**
   * str2ab
   *
   * @description
   * Convert a String instance to an ArrayBuffer instance
   *
   * @param {string} str
   * @returns {ArrayBuffer}
   */
  str2ab (str, type = Uint8Array) {
    let buf = new ArrayBuffer(str.length * 2)
    let view = new type(buf)

    for (let i = 0, strLen = str.length; i < strLen; i++) {
      view[i] = str.charCodeAt(i)
    }

    return buf
  },

  /**
   * ab2str
   *
   * @description
   * Convert an ArrayBuffer instance to a String instance
   *
   * @param {ArrayBuffer} ab
   * @returns {string}
   */
  ab2str (buf, type = Uint8Array) {
    return String.fromCharCode.apply(null, new type(buf))
  }

}

/**
 * Export
 */
module.exports = encodings
