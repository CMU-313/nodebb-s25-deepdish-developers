<noscript><div class="dropdown" component="category-selector"></noscript>

<!-- New Topic Button & Thread Type Dropdown -->
<div class="d-flex align-items-center">
    <!-- New Topic Button -->
    <button component="category/post" for="category-dropdown-check" class="btn btn-primary btn-sm text-nowrap me-2" id="new_topic" role="button">
        [[category:new-topic-button]]
    </button>

    <!-- Thread Type Dropdown -->
    <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle" id="thread-type-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            🔵 Select Thread Type
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" onclick="setThreadType('discussion')">🔵 Discussion</a></li>
            <li><a class="dropdown-item" href="#" onclick="setThreadType('question')">🟢 Question</a></li>
        </ul>
    </div>
</div>

<!-- Hidden Input to Store Selected Type -->
<input type="hidden" id="thread-type" value="discussion">
<noscript>
	<input type="checkbox" class="hidden" id="category-dropdown-check" aria-hidden="true">
	<ul component="category/list" class="dropdown-menu p-1 text-sm category-dropdown-menu ghost-scrollbar" role="menu">
		{{{each categories}}}
		<li role="presentation" class="category {{{if categories.disabledClass}}}disabled{{{end}}}">
			<a role="menu-item" href="{config.relative_path}/compose?cid={categories.cid}">{categories.level}
				<span component="category-markup">
					<div class="category-item d-inline-block">
						{buildCategoryIcon(@value, "24px", "rounded-circle")}
						{categories.name}
					</div>
				</span>
			</a>
		</li>
		{{{end}}}
	</ul>
</div>
</noscript>
