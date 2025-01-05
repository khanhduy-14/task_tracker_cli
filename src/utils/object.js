class ObjectUtils {
    /**
     * Remove empty values from an object.
     * @param obj Object.
     * @returns A new object with all empty values removed.
     */
    static removeEmptyValues(obj) {
        return Object.fromEntries(
            Object.entries(obj).filter(([_, value]) =>
                value !== undefined && value !== null && value !== ''
            )
        );
    }
}

export default ObjectUtils;