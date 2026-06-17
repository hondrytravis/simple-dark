# ╔══════════════════════════════════════════════════════════════╗
# ║  Simple Dark Soft — oh-my-zsh theme (ys-style layout)      ║
# ║  Color palette based on VS Code "Simple Dark Soft" theme   ║
# ║  Author: Hondry Travis                                     ║
# ╚══════════════════════════════════════════════════════════════╝
#
# ── Install ───────────────────────────────────────────────────
#   ln -s "$PWD/themes/simple-dark-soft.zsh-theme" \
#         ~/.oh-my-zsh/custom/themes/simple-dark-soft.zsh-theme
#
#   Then edit ~/.zshrc:
#     ZSH_THEME="simple-dark-soft"
#
#   Then reload:
#     source ~/.zshrc    # or: omz reload
#
# ── Preview ───────────────────────────────────────────────────
#   Local:
#   # in ~/path on git:main (M · U · A · ↑) [21:47:42]
#   $                                                C:127
#   SSH:
#   # user@host in /var/www on git:deploy (D · ↓) [21:47:42]
#   $
#
# ── Prompt layout ─────────────────────────────────────────────
#
#   Position: # user@host in ~/path on git:BRANCH (STATUS) [TIME] C:EXIT
#             $ _
#
#   Element       Description
#   ────────────  ──────────────────────────────────────────────
#   #              Start-of-prompt marker (pink, bold)
#   user@host      Username and machine hostname (SSH only)
#                  - Regular user: cyan username, purple hostname
#                  - Root user:    red background highlight
#   in ~/path      Current working directory (orange, bold)
#   on git:BRANCH  Active git branch name (muted green)
#   (STATUS)       Git working-tree and remote status (see below)
#   [HH:MM:SS]     Current timestamp, 24-hour format (gray)
#   $               Prompt character, ready for input (gray-white)
#   C:EXIT          Last exit code, right-aligned (red, only on error)
#   venv:name       Active Python virtualenv (purple, when in use)
#
# ── Git status legend (VS Code-style) ─────────────────────────
#
#   These single-letter codes appear inside parentheses after
#   the branch name, separated by middle dots.
#
#   Code   Meaning              Color        Why this color
#   ─────  ───────────────────  ───────────  ──────────────────
#   M      Modified (unstaged)  ${C_CYAN} 青   Modified: unstaged changes
#   U      Untracked (new)      ${C_LGREEN} 亮绿  Untracked: new files
#   A      Added (staged)       ${C_GREEN} 绿   Staged: ready to commit
#   R      Renamed              ${C_YELLOW} 黄   Renamed: file moved
#   D      Deleted              ${C_TOMATO} 番茄  Deleted: file removed
#   !      Conflict (unmerged)  ${C_RED} 红   Critical: merge conflict
#   ↑      Ahead of remote      ${C_BLUE} 天蓝  Info: commits to push
#   ↓      Behind remote        ${C_PINK} 粉   Warning: need to pull
#
#   Examples:
#     (M · U)       = tracked files modified, new files untracked
#     (A · ↑)       = changes staged, ready to push
#     (M · D · !)   = modified, deleted, and merge conflict (trouble!)
#     (↑ · ↓)       = diverged from remote (both ahead and behind)
#
# ── Color summary ─────────────────────────────────────────────
#   Hex         Palette name   Assigned to
#   ──────────  ─────────────  ─────────────────────────────────
#   ${C_PINK}     粉 pink         #  start marker,  ↓ behind
#   ${C_BLUE}     天蓝 deepSky    ↑ ahead
#   ${C_CYAN}     青 cyan         user (SSH),  M modified
#   ${C_PURPLE}     紫 purple       host (SSH),  venv indicator
#   ${C_ORANGE}     橙 orange       ~/path (bold)
#   ${C_YELLOW}     黄 lightYellow   R renamed
#   ${C_GREEN}     绿 green        A added
#   ${C_BRANCH}     草绿 string      git branch
#   ${C_LGREEN}     亮绿 lightGreen  U untracked
#   ${C_TOMATO}     番茄 tomato      D deleted
#   ${C_RED}     红 red          ! conflict,  C:exit code
#   ${C_GRAY}     灰 lightGray    @  in  on  git:  ( )  ·  [TIME]
#   ${C_MUTED}     灰白 mediumWhite  $ prompt,  command input text
#
# ── Palette reference ─────────────────────────────────────────
#   #202124 黑 bg   ${C_BRIGHT} 主前景   ${C_MUTED} 次前景
#   ${C_GRAY} 灰 muted ${C_GREEN} 绿 function  ${C_LGREEN} 亮绿 string
#   ${C_ORANGE} 橙 param ${C_CYAN} 青 namespace ${C_BLUE} 天蓝 type
#   ${C_PURPLE} 紫 const ${C_PINK} 粉 keyword   ${C_TOMATO} 番茄 deleted
#   ${C_RED} 红 err   ${C_YELLOW} 黄 markup
# ─────────────────────────────────────────────────────────────

# ── Mode: dark (default) or light ────────────────────────────
#   Set SIMPLE_MODE=light in ~/.zshrc for light backgrounds
if [[ "${SIMPLE_MODE:-dark}" == "light" ]]; then
  C_PINK="#d01884";   C_BLUE="#005393";   C_CYAN="#006F94"
  C_PURPLE="#8020D0"; C_ORANGE="#BC5000";  C_YELLOW="#9E6A03"
  C_GREEN="#00753B";  C_BRANCH="#1b5e20";  C_LGREEN="#2e7d32"
  C_TOMATO="#D84315"; C_RED="#B71C1C";     C_GRAY="#5f6368"
  C_MUTED="#3c4043";  C_BRIGHT="#202124"
else
  C_PINK="#F572B7";   C_BLUE="#5ab2c6";   C_CYAN="#9CCBD1"
  C_PURPLE="#BD93F9"; C_ORANGE="#D5B884";  C_YELLOW="#c0c264"
  C_GREEN="#56b97f";  C_BRANCH="#a5c47c";  C_LGREEN="#C3E88D"
  C_TOMATO="#FF6347"; C_RED="#f45a55";     C_GRAY="#737373"
  C_MUTED="#bdbdbd";  C_BRIGHT="#f0f0f0"
fi

# ── VCS shared styles ────────────────────────────────────────
local S_VCS_ON="%F{${C_GRAY}}on%f "
local S_VCS_TYPE="%F{${C_GRAY}}git:%f"

# ── Consolidated git prompt ──────────────────────────────────
# Replaces git_prompt_info + git_prompt_status with single bracket:
#   on git:BRANCH [dirty, new, mod, ahead]
sd_git_prompt() {
  # Not in a git repo — nothing to show
  __git_prompt_git rev-parse --is-inside-work-tree &>/dev/null || return

  local branch=$(__git_prompt_git symbolic-ref --short HEAD 2>/dev/null \
                || __git_prompt_git rev-parse --short HEAD 2>/dev/null)
  [[ -z "$branch" ]] && return

  # ── Collect status flags ────────────────────────────────
  local flags=()
  local status_text
  status_text="$(__git_prompt_git status --porcelain -b 2>/dev/null)"

  # Tracked changes → M (cyan — any change to tracked files)
  if echo "$status_text" | tail -n +2 | grep -qv '^??'; then
    flags+=("%F{${C_CYAN}}M%f")
  fi

  # Untracked files → U (light green — new, not yet tracked)
  if echo "$status_text" | grep -q '^??'; then
    flags+=("%F{${C_LGREEN}}U%f")
  fi

  # Staged new file → A (green)
  if echo "$status_text" | grep -qE '^A'; then
    flags+=("%F{${C_GREEN}}A%f")
  fi

  # Deleted → D (red)
  if echo "$status_text" | grep -qE '^ D|^D '; then
    flags+=("%F{${C_TOMATO}}D%f")
  fi

  # Renamed → R (yellow — structural change)
  if echo "$status_text" | grep -q '^R'; then
    flags+=("%F{${C_YELLOW}}R%f")
  fi

  # Unmerged / conflict → ! (red)
  if echo "$status_text" | grep -qE '^(UU|AA|DD|AU|UA|DU|UD)'; then
    flags+=("%F{${C_RED}}!%f")
  fi

  # ── Remote: ahead / behind ──────────────────────────────
  local tracking
  tracking="$(echo "$status_text" | head -1 | grep -oE '\[.*\]')"
  if [[ -n "$tracking" ]]; then
    if echo "$tracking" | grep -q 'ahead'; then
      flags+=("%F{${C_BLUE}}↑%f")
    fi
    if echo "$tracking" | grep -q 'behind'; then
      flags+=("%F{${C_PINK}}↓%f")
    fi
  fi

  # ── Build output ────────────────────────────────────────
  local out="${S_VCS_ON}${S_VCS_TYPE}%F{${C_BRANCH}}${branch}%f"
  if (( ${#flags} > 0 )); then
    local flag_str="${flags[1]}"
    for ((i=2; i<=${#flags}; i++)); do
      flag_str+="%F{${C_GRAY}} · %f${flags[$i]}"
    done
    out+=" %F{${C_GRAY}}(%f${flag_str}%F{${C_GRAY}})%f"
  fi

  echo -n "$out"
}

# ── User & host (SSH only) ────────────────────────────────────
sd_user_host() {
  [[ -n "${SSH_CONNECTION:-}" ]] || return
  if [[ $UID -eq 0 ]]; then
    echo "%K{${C_RED}}%F{${C_BRIGHT}}%n%k%f%F{${C_GRAY}}@%F{${C_CYAN}}%m%F{${C_GRAY}} in %f"
  else
    echo "%F{${C_CYAN}}%n%F{${C_GRAY}}@%F{${C_PURPLE}}%m%F{${C_GRAY}} in %f"
  fi
}

# ── Virtualenv prompt ────────────────────────────────────────
sd_venv_prompt() {
  [[ -n "${VIRTUAL_ENV:-}" ]] || return
  echo " %F{${C_PURPLE}}venv:${VIRTUAL_ENV:t}%f"
}

# ── Exit code: shown on right side, red, only on error ────────

# ── PROMPT ───────────────────────────────────────────────────
PROMPT="
%F{${C_PINK}}%B#%b%f \
$(sd_user_host)\
%F{${C_ORANGE}}%B%~%b%f \
$(sd_git_prompt)\
$(sd_venv_prompt)\
 \
%F{${C_GRAY}}[%*]%f
%F{${C_MUTED}}%B$%b%f "

# ── RPROMPT: exit code on the right ──────────────────────────
RPROMPT='%(?,,%F{${C_RED}}C:%?%f)'
