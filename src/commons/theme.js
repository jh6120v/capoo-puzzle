export const theme = (darkMode) => {
    const lightTheme = {
        background: '#6cb8cf',
        textColor: '#1d1d1f',

        headerBg: '#6cb8cf',
        headerTextColor: '#ffffff',

        containerBg: '#aadff0',

        personalRecordItemTitleTextColor: '#4f6571',
        personalRecordItemContentBg: '#6cb8cf',
        personalRecordItemContentTextColor: '#ffffff',

        ratingTextColor: '#4f6571',

        settingBg: '#9fd4e5',
        settingItemBg: '#AADFF0',
        settingItemTextColor: '#4f6571',
        settingItemBorderColor: '#6cb8cf',
        settingItemIconColor: '#4f6571',
        settingItemInActiveBg: '#9FD1E0',

        versionTextColor: '#4f6571',

        modelBg: '#ffffff',
        modelTextColor: '#1d1d1f',
        modelConfirmBtnBg: '#5AC9E8',
        modelConfirmBtnTextColor: '#ffffff',

        functionBtnTextColor: '#4f6571',

        rankingBg: '#9fd4e5',
        rankingBorderColor: '#6cb8cf',
        rankingTitleTextColor: '#4f6571',
        rankingListBg: '#AADFF0',
        rankingListTextColor: '#4f6571',
        rankingItemBorderColor: '#6cb8cf'
    };

    const darkTheme = {
        background: '#121212',
        textColor: '#ffffff',

        headerBg: '#262626',
        headerTextColor: '#ffffff',

        containerBg: '#121212',

        personalRecordItemTitleTextColor: '#ffffff',
        personalRecordItemContentBg: '#ffffff',
        personalRecordItemContentTextColor: '#121212',

        ratingTextColor: '#ffffff',

        settingBg: '#191919',
        settingItemBg: '#121212',
        settingItemTextColor: '#d7d7d7',
        settingItemBorderColor: '#191919',
        settingItemIconColor: '#d7d7d7',
        settingItemInActiveBg: '#444444',

        versionTextColor: '#d7d7d7',

        modelBg: '#191919',
        modelTextColor: '#d7d7d7',
        modelConfirmBtnBg: '#121212',
        modelConfirmBtnTextColor: '#ffffff',

        functionBtnTextColor: '#ffffff',

        rankingBg: '#191919',
        rankingBorderColor: '#191919',
        rankingTitleTextColor: '#d7d7d7',
        rankingListBg: '#121212',
        rankingListTextColor: '#d7d7d7',
        rankingItemBorderColor: '#191919'
    };

    return darkMode ? darkTheme : lightTheme;
};