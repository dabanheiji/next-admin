const locale_cn = {
    username: '用户名',
    password: '密码',
    submit: '提交',
    reset: '重置',
    inputPlaceholder: '请输入',
    selectPlaceholder: '请选择',
    login: '登录',
}

const validate_cn = {
    required: '是必填项',
    minLength6: minLength(6),
}

export function __(key: keyof typeof locale_cn, validateKey?: keyof typeof validate_cn) {
    if(!key) {
        return '-';
    }

    if(validateKey) {
        return `${locale_cn[key]}${validate_cn[validateKey]}`;
    }

    return locale_cn[key] || '-';
}

function minLength(num: number) {
    return `不能少于${num}位`;
}