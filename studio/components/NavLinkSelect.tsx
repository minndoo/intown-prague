import {useCallback, useEffect, useState} from 'react'
import {type StringInputProps, set, unset, useClient} from 'sanity'
import {Card, Select, Stack, Text} from '@sanity/ui'

type NavLink = {label: string; fragment: string}

export function NavLinkSelect(props: StringInputProps) {
  const {value, onChange} = props
  const client = useClient({apiVersion: '2024-01-01'})
  const [options, setOptions] = useState<NavLink[]>([])

  useEffect(() => {
    client
      .fetch<NavLink[] | null>(
        `*[_id == "siteSettings"][0].navLinks[linkType == "internal"]{ label, fragment }`,
      )
      .then((result) => setOptions(result?.filter((o) => o.fragment) ?? []))
  }, [client])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.currentTarget.value
      onChange(val ? set(val) : unset())
    },
    [onChange],
  )

  if (options.length === 0) {
    return (
      <Card padding={3} tone="caution" radius={2}>
        <Text size={1}>No internal navigation links with fragments defined in Site Settings yet.</Text>
      </Card>
    )
  }

  return (
    <Stack space={2}>
      <Select value={value ?? ''} onChange={handleChange}>
        <option value="">— None —</option>
        {options.map((opt) => (
          <option key={opt.fragment} value={opt.fragment}>
            {opt.label} (#{opt.fragment})
          </option>
        ))}
      </Select>
    </Stack>
  )
}
